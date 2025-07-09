/**
 * Figma MCP Integration Service
 * 
 * This service handles the connection to Figma's MCP (Model Context Protocol)
 * to access design specifications, tokens, and components.
 */

interface FigmaConfig {
  accessToken?: string;
  fileKey?: string;
  teamId?: string;
}

interface DesignToken {
  name: string;
  value: string;
  type: 'color' | 'spacing' | 'typography' | 'shadow' | 'radius';
  description?: string;
}

interface FigmaComponent {
  id: string;
  name: string;
  description?: string;
  properties?: Record<string, any>;
}

export class FigmaMCPService {
  private config: FigmaConfig;
  private mcpEndpoint: string;

  constructor(config?: FigmaConfig) {
    this.config = {
      accessToken: config?.accessToken || process.env.FIGMA_ACCESS_TOKEN || '',
      fileKey: config?.fileKey || process.env.FIGMA_FILE_KEY || '',
      teamId: config?.teamId || process.env.FIGMA_TEAM_ID || '',
    };
    
    this.mcpEndpoint = process.env.FIGMA_MCP_ENDPOINT || 'http://localhost:3001';
  }

  /**
   * Initialize MCP connection
   */
  async connect(): Promise<boolean> {
    try {
      const response = await fetch(`${this.mcpEndpoint}/health`);
      return response.ok;
    } catch (error) {
      console.error('Failed to connect to Figma MCP:', error);
      return false;
    }
  }

  /**
   * Fetch design tokens from Figma
   */
  async getDesignTokens(): Promise<DesignToken[]> {
    try {
      const response = await fetch(`${this.mcpEndpoint}/tokens`, {
        headers: {
          'Authorization': `Bearer ${this.config.accessToken ?? ''}`,
          'X-Figma-File-Key': this.config.fileKey ?? '',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch design tokens');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching design tokens:', error);
      return [];
    }
  }

  /**
   * Fetch components from Figma
   */
  async getComponents(): Promise<FigmaComponent[]> {
    try {
      const response = await fetch(`${this.mcpEndpoint}/components`, {
        headers: {
          'Authorization': `Bearer ${this.config.accessToken ?? ''}`,
          'X-Figma-File-Key': this.config.fileKey ?? '',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch components');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching components:', error);
      return [];
    }
  }
}

// Export a singleton instance
export const figmaMCP = new FigmaMCPService();