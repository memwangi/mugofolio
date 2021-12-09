import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
   fonts: {
    heading: `Source Sans 3, ${base.fonts?.heading}`,
    body: `Work Sans, ${base.fonts?.body}`,
  },
});

export default theme;