# Vibe UI Library

This repository represents a proof-of-concept for importing Figma components into a React library using MCP (Model Context Protocol) with Cursor (+gpt-5).

The goal is to obtain components that are as close as possible to production-ready, with well-documented and structured code that is easy to maintain and modify.

The repo comes with a preconfigured infrastructure:

- Framework: React.js (TypeScript)
- Styling: TailwindCSS
- UI Components: Radix UI
- Demo & Documentation: Storybook

General guidelines for working with the package are included in `.cursor/rules/alwaysApply`.

Case-specific rules, such as `.cursor/rules/new_component.mdc` for adding new components, are also provided (requires manual activation).

- [Demo](https://alexssh.github.io/vibe-ui-lib/)
- [Figma library file (source)](https://www.figma.com/design/QbK6Oyz6JR1lKLZNqPvzr8/Vibe-UI-Lib?node-id=0-1&t=3Y07vxxsmtbpHwAM-1)

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
- Use a property named `content` for text when the content may include links or other elements.
- Use a property named `slot` for swappable instances, allowing the content to be replaced in code.
- Try to use terms in properties that are as close as possible to those used on the technical side (states, hover, disabled, etc).
- Components named like `Component/Subcomponent/Subcomponent` will be organized accordingly in the code.

## Prompts

Component import

```
...
```

Some components require clarification of implementation details due to specifics of the Figma MCP response. For instance, importing the Icon component with correct scaling of SVG elements:

```
Add a new component named Icon that selected in Figma.
The component is a container for SVG icons that inherits its colour from the theme (e.g., `color-neutral-icon-default`) but can be set manually via a component property.
The container must have a one fixed size of 24px × 24px.
SVG paths must match the viewBox property (some of the SVG icons may be smaller than 24x24px), so that use absolute positioning from MCP response to align them properly within the container (e.g. `inset-[8.33%_8.33%_12.5%_8.33%]`)
Provide examples in Storybook and JSDoc documentation on how to set colors with the theme variables.
The component must follow the standard library and guidelines.
```

## Tips

- Review the reasoning. It can sometimes reveal issues in the instructions.
- The initial prompt may not work exactly as intended; you may need to try several times to get a good result.
- Even a good result might need refinement and you can request refactoring or simplification. So it’s important to understand the outcome of what the agent has produced.
