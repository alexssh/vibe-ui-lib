# Vibe UI Library

This repository represents a proof-of-concept for importing Figma components into a React library using MCP (Model Context Protocol) with Cursor (+gpt-5).

The goal is to obtain components that are as close as possible to production-ready, with well-documented and structured code that is easy to maintain and modify.

The repo comes with a preconfigured infrastructure:

- Framework: React.js (TypeScript)
- Styling: TailwindCSS
- UI Components: Radix UI
- Demo & Documentation: Storybook

General agent guidelines for working with the package are included in `.cursor/rules/alwaysApply`.
Case-specific rules, such as `.cursor/rules/component_implementation_guidelines.mdc` for adding new components, are also provided (requires manual activation).

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

Remember that prompting is not a one-size-fits-all experience. It is recommended running thorough experiments and iterating to find the best solution for your problem.

One of the most useful instructions I’ve found for identifying problems and debugging (already included in `component_implementation_guidelines.mdc`):

```
Output a list of any uncertainties, ambiguities, unclear steps, or instruction conflicts you encountered during the task.
```

Also, with a larger codebase and established, well-tested references, subsequent component additions proceed more smoothly.

### Adding new components

You can start using the generic component prompt with the `component_implementation_guidelines.mdc` guidelines. The initial prompt may not work exactly as intended; you may need to try several times to get a good result or provide additional instructions:

```
# Task

- Your task is to add a new component to the UI library.
- You must source design assets and raw structure from Figma via MCP. Pay attention to Figma MCP's conventions for component nesting and naming.
- The component must follow the standard library and guidelines.
```

Some components require clarification of implementation details due to specifics of the Figma MCP response. For instance, importing the `Icon` component with correct scaling of SVG elements:

```
# Task
...

## Additional instructions for completing the task

- The component named Icon that selected in Figma.
- The component is a container for SVG icons that inherits its colour from the theme (e.g., `color-neutral-icon-default`) but can be set manually via a component property.
- The container must have a one fixed size of 24px × 24px.
- SVG paths must match the viewBox property (some of the SVG icons may be smaller than 24x24px), so that use absolute positioning from MCP response to align them properly within the container (e.g. `inset-[8.33%_8.33%_12.5%_8.33%]`)
- Provide examples in Storybook and JSDoc documentation on how to set colors with the theme variables.
```

Sometimes a direct specification of certain dependencies or the required component structure is necessary, as the agent may either not detect available exports from dependent libraries or receive an ambiguous structure from Figma’s response. `Checkbox` import with additional instructions:

```
...

## Additional instructions for completing the task

- The component named Checkbox that selected in Figma.
- The component represents a checkbox control + label that a user can select or deselect.
- Implement the checkbox control as a private subcomponent in the Checkbox folder (not publicly exported).
- Import { Checkbox } from "radix-ui" to impletent the control.
- The indicator is not provided by Figma and should be rendered inside a div with aria-hidden="true" of the CheckboxControl function. Use Icon with glyph="check" to replicate the visual design.
- The public Checkbox component controls state for both the control and the label; state changes affect styling (e.g., checked, focus, disabled, hover, etc. if specified).
- Export publicly only Checkbox.
```

You can also reference styling from other implemented components:

```
...

## Additional instructions for completing the task

- The component named SelectField that selected in Figma.
- It is a basic select input with options. The component is supposed to used in different forms or in companation with Label or Hint.
- Use the standard HTML implementation for option. Provide some options in stories.
- The component contain the dropdown button that can be implemented within the main component (not a subcomponent).
- Copy InputField style classes to reproduce states for SelectField, avoid dependencies.
```

Even a good result might need refinement and you can request refactoring or simplification. So it’s important to understand the outcome of what the agent has produced ans the agent to fix it:

- Review the reasoning. It can sometimes reveal issues in the instructions.
- Check what Figma returns via the `get_code` request, and ask the agent to explain what a specific piece of code does to refine the prompt.
- Suggest ignoring certain properties or features retrieved from Figma, or interpreting them differently.

### Modifying existing components

When modifying a component in Figma, it is better to use the new prompt to maintain backward compatibility:

```
# Task

- Your task is to modify the Button component.
- You must source the design assets and raw structure from Figma via MCP.
- Note that the component’s structure and styles have changed. Compare the current implementation with the updated design, and apply the changes in properties, strcture, styles.
- The component must follow the standard library and guidelines.

## Additional instructions for completing the task

- The component is used across other projects, so you must maintain backward compatibility for properties.
- Avoid breaking changes to public props and events.
- If a change is unavoidable, provide a graceful fallback, deprecate old APIs with warnings, and document the migration path.
- Preserve existing class names, data attributes, and test IDs where possible.

```

It is better to provide separate instructions for modification and explain the changes so that the agent can deliver more accurately:

```
...
- Treat the icon and content properties as children elements. In Storybook, provide examples demonstrating all combinations: text only, text + Icon, Icon + text, Icon only.
- Ignore the container around the button text. It is only used for convenience in Figma.
- The Icon component colour must match the Button's text colour and its states when passed as a child.
- Set the default gap between children: default size - 8px, small size - 4px.
- The button should have a defined minimum width: defaul size - 48px, small size - 32px.
```
