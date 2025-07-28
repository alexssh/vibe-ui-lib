# Vibe UI Library

This repository represents a proof-of-concept for importing Figma components into a React library using MCP (Model Context Protocol) with Cursor (+ gemini-2.5-pro).

The goal is to obtain components that are as close as possible to production-ready, with well-documented and structured code that is easy to maintain and modify.

- [Demo](https://alexssh.github.io/vibe-ui-lib/)
- [Figma library file (source)](https://www.figma.com/design/QbK6Oyz6JR1lKLZNqPvzr8/Vibe-UI-Lib?node-id=0-1&t=3Y07vxxsmtbpHwAM-1)

## Features

- **Figma Integration**: Rules for importing/updating Figma components into code via MCP
- **Radix UI Foundation**: Component implementations using Radix UI primitives for accessibility and flexibility
- **Tailwind Styling**: Clean, maintainable utility styling
- **Storybook Documentation**: Interactive component documentation
- **TypeScript Support**: Full type safety with proper IntelliSense
- **Production Ready**: Optimized builds for npm package distribution

## Getting started

### Env

1. Clone the repository and open in Cursor
2. Install dependencies: `npm i`
3. Connect Figma MCP - [Tutorial Video](https://www.youtube.com/watch?v=yO3Wr7DEWF0)

### Usage

1. Select a component in Figma
2. Use one of the prompts below within Cursor (use agent mode)
3. Code components will be automatically generated following the established patterns

### Useful commands

```bash
# Development
npm run storybook    # Start Storybook dev server (for local preview)

# Production
npm run prod         # Build library for consumer projects
```

## Using the library

### Local Development

For local usage, set up a symlink:

```bash
# In the library root
npm link

# In your consumer project root
npm link vibe-ui-lib
```

### TypeScript Configuration

Add types to your `tsconfig.json` for better development experience:

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/vibe-ui-lib/dist", "./node_modules/@types"]
  }
}
```

### Import and Usage

```tsx
// Import styles
import 'vibe-ui-lib/dist/style.css';

// Import components
import { Example } from 'vibe-ui-lib';

// Basic usage
<Example variant="primary" onClick={() => console.log('clicked')}>
  Click me
</Example>

// With asChild for flexible rendering
<Example variant="primary" asChild>
  <a href="https://example.com">Link Button</a>
</Example>
```

## Figma file organization

- Use **PascalCase** for component names
- Use **camelCase** for everything else (properties, layers, etc.)
- Name the layers according to the variables associated with them.
- Try to use terms in properties that are as close as possible to those used on the technical side (states, hover, disabled, etc).
- Components named like `Component/Subcomponent/Subcomponent` will be organized accordingly in the code.

## Prompts

For importing components (all other guidelines will be applied automatically from `.cursor/rules`):

```
Take the selected component in Figma and convert it into a React component.
The components will be shipped inside an npm package as a component library and consumed by external projects.
Import Figma variables (design tokens) into ./src/variables.scss.
Follow rules and guidelines provided.
```

You can try extending it with additional instructions that override the guidelines. Useful for handling certain exceptions.

```
...
Follow rules and guidelines provided.

Ignore the guideline about not adding animations. This spinner component should rotate 360 degrees over the course of one second, with the animation set to loop continuously.
```

## Components list

Below is a list of components that were imported from Figma as-is, as well as those that were manually tweaked or vibe-coded.
