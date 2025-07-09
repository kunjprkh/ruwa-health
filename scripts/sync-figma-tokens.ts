#!/usr/bin/env tsx

/**
 * Script to sync design tokens from Figma using MCP
 * 
 * Usage: npm run sync:figma-tokens
 */

import { figmaMCP } from '../src/lib/figma-mcp';
import fs from 'fs/promises';
import path from 'path';

async function syncFigmaTokens() {
  console.log('🎨 Syncing design tokens from Figma...\n');

  // Check connection
  const isConnected = await figmaMCP.connect();
  if (!isConnected) {
    console.error('❌ Failed to connect to Figma MCP. Please ensure the MCP server is running.');
    process.exit(1);
  }

  console.log('✅ Connected to Figma MCP\n');

  // Fetch design tokens
  console.log('📥 Fetching design tokens...');
  const tokens = await figmaMCP.getDesignTokens();
  
  if (tokens.length === 0) {
    console.warn('⚠️  No design tokens found.');
    return;
  }

  console.log(`✅ Found ${tokens.length} design tokens\n`);

  // Group tokens by type
  const tokensByType: Record<string, any[]> = tokens.reduce((acc, token) => {
    if (!acc[token.type]) acc[token.type] = [];
    acc[token.type].push(token);
    return acc;
  }, {} as Record<string, any[]>);

  // Generate CSS variables
  let cssContent = `/* 
 * Design tokens synced from Figma
 * Generated on: ${new Date().toISOString()}
 * DO NOT EDIT MANUALLY - This file is auto-generated
 */

:root {
`;

  // Process colors
  const colors = tokensByType.color ?? [];
  if (colors.length > 0) {
    cssContent += '  /* Colors */\n';
    colors.forEach(token => {
      const cssVarName = token.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      cssContent += `  --color-${cssVarName}: ${token.value}; /* ${token.description || ''} */\n`;
    });
    cssContent += '\n';
  }

  // Process spacing
  const spacing = tokensByType.spacing ?? [];
  if (spacing.length > 0) {
    cssContent += '  /* Spacing */\n';
    spacing.forEach(token => {
      const cssVarName = token.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      cssContent += `  --spacing-${cssVarName}: ${token.value}; /* ${token.description || ''} */\n`;
    });
    cssContent += '\n';
  }

  // Process typography
  const typography = tokensByType.typography ?? [];
  if (typography.length > 0) {
    cssContent += '  /* Typography */\n';
    typography.forEach(token => {
      const cssVarName = token.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      cssContent += `  --font-${cssVarName}: ${token.value}; /* ${token.description || ''} */\n`;
    });
    cssContent += '\n';
  }

  // Process shadows
  const shadow = tokensByType.shadow ?? [];
  if (shadow.length > 0) {
    cssContent += '  /* Shadows */\n';
    shadow.forEach(token => {
      const cssVarName = token.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      cssContent += `  --shadow-${cssVarName}: ${token.value}; /* ${token.description || ''} */\n`;
    });
    cssContent += '\n';
  }

  // Process radius
  const radius = tokensByType.radius ?? [];
  if (radius.length > 0) {
    cssContent += '  /* Border Radius */\n';
    radius.forEach(token => {
      const cssVarName = token.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      cssContent += `  --radius-${cssVarName}: ${token.value}; /* ${token.description || ''} */\n`;
    });
  }

  cssContent += '}\n';

  // Write to file
  const outputPath = path.join(process.cwd(), 'src/styles/figma-tokens.css');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, cssContent, 'utf-8');

  console.log(`✅ Design tokens written to: ${outputPath}\n`);

  // Also generate a TypeScript file with token constants
  let tsContent = `/**
 * Design tokens synced from Figma
 * Generated on: ${new Date().toISOString()}
 * DO NOT EDIT MANUALLY - This file is auto-generated
 */

export const figmaTokens = ${JSON.stringify(tokens, null, 2)};

export const tokensByType = ${JSON.stringify(tokensByType, null, 2)};
`;

  const tsOutputPath = path.join(process.cwd(), 'src/lib/figma-tokens.ts');
  await fs.writeFile(tsOutputPath, tsContent, 'utf-8');

  console.log(`✅ TypeScript tokens written to: ${tsOutputPath}\n`);
  console.log('🎉 Figma token sync complete!');
}

// Run the sync
syncFigmaTokens().catch(console.error);