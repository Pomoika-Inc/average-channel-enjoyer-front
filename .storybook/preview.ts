import type { Preview } from "@storybook/react";
import "@/shared/brand-colors.scss"
import "@/shared/global.scss"
import '../tailwind.css';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
