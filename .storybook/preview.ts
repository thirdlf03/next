import type { Preview, ReactRenderer } from "@storybook/react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { lightTheme, darkTheme } from "../src/components/theme/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
    decorators: [
        withThemeFromJSXProvider<ReactRenderer>({
            themes: {
                light: lightTheme,
                dark: darkTheme,
            },
            defaultTheme: "dark",
            Provider: ThemeProvider,
            GlobalStyles: CssBaseline,
        }),
  ]
};

export default preview;
