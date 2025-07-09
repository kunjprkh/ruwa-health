# Figma MCP Integration Setup

This guide explains how to connect your Ruwa design system to Figma using MCP (Model Context Protocol).

## Prerequisites

1. A Figma account with access to your design files
2. A Figma Personal Access Token
3. Node.js 18+ installed

## Setup Steps

### 1. Get Figma Access Token

1. Log in to Figma
2. Go to Settings > Account > Personal access tokens
3. Generate a new token with the following scopes:
   - `file_read` - Read access to files
   - `file_variables:read` - Read access to variables/tokens
4. Copy the token (you won't be able to see it again)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Copy from .env.example
cp .env.example .env.local
```

Add your Figma credentials:

```env
FIGMA_ACCESS_TOKEN=your_figma_personal_access_token
FIGMA_FILE_KEY=your_figma_file_key
FIGMA_TEAM_ID=your_figma_team_id
```

To find your Figma file key:
- Open your Figma file
- The URL will be: `https://www.figma.com/file/FILE_KEY/File-Name`
- Copy the FILE_KEY portion

### 3. Install MCP Server (Optional)

If you want to run a local MCP server:

```bash
# Install globally
npm install -g @modelcontextprotocol/server-figma

# Or add to your project
npm install --save-dev @modelcontextprotocol/server-figma
```

### 4. Start MCP Server

Run the MCP server:

```bash
mcp-server-figma --port 3001
```

### 5. Sync Design Tokens

Run the sync script to pull design tokens from Figma:

```bash
npm run sync:figma-tokens
```

This will:
- Connect to Figma via MCP
- Fetch all design tokens (colors, spacing, typography, etc.)
- Generate `src/styles/figma-tokens.css` with CSS variables
- Generate `src/lib/figma-tokens.ts` with TypeScript constants

### 6. Import Tokens in Your App

Add the generated CSS to your global styles:

```css
/* In src/app/globals.css */
@import '../styles/figma-tokens.css';
```

Use the tokens in your components:

```tsx
// Use CSS variables
<div className="bg-[var(--color-primary)]" />

// Or use TypeScript constants
import { figmaTokens } from '@/lib/figma-tokens';
```

## API Usage

You can also use the Figma MCP service programmatically:

```typescript
import { figmaMCP } from '@/lib/figma-mcp';

// Check connection
const isConnected = await figmaMCP.connect();

// Get design tokens
const tokens = await figmaMCP.getDesignTokens();

// Get components
const components = await figmaMCP.getComponents();

// Sync tokens to CSS
await figmaMCP.syncTokensToCSS();
```

## Troubleshooting

### Connection Failed
- Ensure the MCP server is running
- Check your Figma access token is valid
- Verify the file key is correct

### No Tokens Found
- Make sure your Figma file has variables/tokens defined
- Check that your access token has the correct permissions

### MCP Server Not Found
- Install the MCP server package
- Ensure it's running on the correct port (default: 3001)

## Next Steps

1. Set up a CI/CD pipeline to automatically sync tokens
2. Create a webhook to sync on Figma file changes
3. Build a UI to preview synced tokens
4. Extend the service to sync components and styles

## Resources

- [MCP Documentation](https://modelcontextprotocol.org)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [Figma Variables/Tokens](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables)