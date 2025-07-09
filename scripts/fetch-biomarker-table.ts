#!/usr/bin/env tsx

/**
 * Script to fetch BiomarkerTable component specs from Figma
 * 
 * Usage: npm run fetch:biomarker-table
 */

import fs from 'fs/promises';
import path from 'path';

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  backgroundColor?: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  fills?: any[];
  strokes?: any[];
  strokeWeight?: number;
  cornerRadius?: number;
  constraints?: {
    vertical: string;
    horizontal: string;
  };
  layoutAlign?: string;
  layoutGrow?: number;
  padding?: number;
  itemSpacing?: number;
  primaryAxisSizingMode?: string;
  primaryAxisAlignItems?: string;
  counterAxisAlignItems?: string;
  layoutMode?: string;
  characters?: string;
  style?: any;
  styles?: any;
  componentPropertyDefinitions?: Record<string, any>;
  componentProperties?: Record<string, any>;
}

interface FigmaComponent {
  key: string;
  name: string;
  description?: string;
  componentSetId?: string;
  documentationLinks?: string[];
}

async function fetchFigmaFile(fileKey: string, accessToken: string) {
  const response = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
    headers: {
      'X-Figma-Token': accessToken,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Figma file: ${response.statusText}`);
  }

  return await response.json();
}

async function fetchComponentNodes(fileKey: string, componentIds: string[], accessToken: string) {
  const ids = componentIds.join(',');
  const response = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${ids}`, {
    headers: {
      'X-Figma-Token': accessToken,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch component nodes: ${response.statusText}`);
  }

  return await response.json();
}

function findBiomarkerTableNodes(node: FigmaNode, results: FigmaNode[] = []): FigmaNode[] {
  if (node.name && node.name.toLowerCase().includes('biomarker') && 
      (node.name.toLowerCase().includes('table') || node.type === 'INSTANCE')) {
    results.push(node);
  }

  if (node.children) {
    node.children.forEach(child => findBiomarkerTableNodes(child, results));
  }

  return results;
}

function extractComponentStructure(node: FigmaNode): any {
  const structure: any = {
    id: node.id,
    name: node.name,
    type: node.type,
  };

  // Extract layout properties
  if (node.layoutMode) {
    structure.layout = {
      mode: node.layoutMode,
      padding: node.padding,
      itemSpacing: node.itemSpacing,
      primaryAxisSizingMode: node.primaryAxisSizingMode,
      primaryAxisAlignItems: node.primaryAxisAlignItems,
      counterAxisAlignItems: node.counterAxisAlignItems,
    };
  }

  // Extract size and position
  if (node.absoluteBoundingBox) {
    structure.bounds = node.absoluteBoundingBox;
  }

  // Extract visual properties
  if (node.fills) {
    structure.fills = node.fills;
  }

  if (node.strokes) {
    structure.strokes = node.strokes;
    structure.strokeWeight = node.strokeWeight;
  }

  if (node.cornerRadius !== undefined) {
    structure.cornerRadius = node.cornerRadius;
  }

  // Extract component properties
  if (node.componentPropertyDefinitions) {
    structure.componentProperties = node.componentPropertyDefinitions;
  }

  if (node.componentProperties) {
    structure.instanceProperties = node.componentProperties;
  }

  // Extract text content
  if (node.characters) {
    structure.text = node.characters;
    structure.style = node.style;
  }

  // Recursively extract children
  if (node.children && node.children.length > 0) {
    structure.children = node.children.map(child => extractComponentStructure(child));
  }

  return structure;
}

async function main() {
  const accessToken = process.env.FIGMA_ACCESS_TOKEN;
  const fileKey = process.env.FIGMA_FILE_KEY;

  if (!accessToken || !fileKey) {
    console.error('❌ Please set FIGMA_ACCESS_TOKEN and FIGMA_FILE_KEY environment variables');
    process.exit(1);
  }

  console.log('🔍 Fetching BiomarkerTable component from Figma...\n');

  try {
    // Fetch the entire file structure
    console.log('📥 Fetching Figma file...');
    const fileData = await fetchFigmaFile(fileKey, accessToken);
    
    // Find all BiomarkerTable-related nodes
    console.log('🔎 Searching for BiomarkerTable components...');
    const biomarkerNodes = findBiomarkerTableNodes(fileData.document);
    
    console.log(`✅ Found ${biomarkerNodes.length} BiomarkerTable-related nodes\n`);

    if (biomarkerNodes.length === 0) {
      console.warn('⚠️  No BiomarkerTable components found in the file');
      return;
    }

    // Extract detailed information for each node
    const componentSpecs = biomarkerNodes.map(node => {
      console.log(`📊 Processing: ${node.name}`);
      return extractComponentStructure(node);
    });

    // Generate TypeScript interfaces
    const tsInterfaces = generateTypeScriptInterfaces(componentSpecs);

    // Save to files
    const outputDir = path.join(process.cwd(), 'src/components/biomarker-table/specs');
    await fs.mkdir(outputDir, { recursive: true });

    // Save raw component data
    const jsonPath = path.join(outputDir, 'biomarker-table-figma.json');
    await fs.writeFile(jsonPath, JSON.stringify(componentSpecs, null, 2), 'utf-8');
    console.log(`\n✅ Component specs saved to: ${jsonPath}`);

    // Save TypeScript interfaces
    const tsPath = path.join(outputDir, 'biomarker-table-figma.types.ts');
    await fs.writeFile(tsPath, tsInterfaces, 'utf-8');
    console.log(`✅ TypeScript interfaces saved to: ${tsPath}`);

    // Generate summary
    const summary = generateComponentSummary(componentSpecs);
    const summaryPath = path.join(outputDir, 'biomarker-table-summary.md');
    await fs.writeFile(summaryPath, summary, 'utf-8');
    console.log(`✅ Component summary saved to: ${summaryPath}`);

    console.log('\n🎉 BiomarkerTable fetch complete!');

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

function generateTypeScriptInterfaces(specs: any[]): string {
  let interfaces = `/**
 * BiomarkerTable component types from Figma
 * Generated on: ${new Date().toISOString()}
 * DO NOT EDIT MANUALLY - This file is auto-generated
 */

`;

  // Extract unique property definitions
  const allProperties = new Set<string>();
  specs.forEach(spec => {
    if (spec.componentProperties) {
      Object.keys(spec.componentProperties).forEach(prop => allProperties.add(prop));
    }
  });

  // Generate main interface
  interfaces += `export interface BiomarkerTableProps {
`;

  allProperties.forEach(prop => {
    interfaces += `  ${prop}?: any; // TODO: Define proper type based on Figma spec\n`;
  });

  interfaces += `}

export interface BiomarkerTableStructure {
  layout?: {
    mode: string;
    padding?: number;
    itemSpacing?: number;
    primaryAxisSizingMode?: string;
    primaryAxisAlignItems?: string;
    counterAxisAlignItems?: string;
  };
  bounds?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fills?: any[];
  strokes?: any[];
  strokeWeight?: number;
  cornerRadius?: number;
  children?: BiomarkerTableStructure[];
}
`;

  return interfaces;
}

function generateComponentSummary(specs: any[]): string {
  let summary = `# BiomarkerTable Component Summary

Generated from Figma on: ${new Date().toISOString()}

## Components Found

`;

  specs.forEach((spec, index) => {
    summary += `### ${index + 1}. ${spec.name}
- Type: ${spec.type}
- ID: ${spec.id}
`;

    if (spec.bounds) {
      summary += `- Dimensions: ${spec.bounds.width}x${spec.bounds.height}\n`;
    }

    if (spec.componentProperties) {
      summary += `- Properties: ${Object.keys(spec.componentProperties).join(', ')}\n`;
    }

    if (spec.children) {
      summary += `- Children: ${spec.children.length}\n`;
    }

    summary += '\n';
  });

  return summary;
}

// Run the script
main().catch(console.error);