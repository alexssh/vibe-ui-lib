import type { Preview } from "@storybook/react-vite"
import "../src/styles.css"
import "../src/variables.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
