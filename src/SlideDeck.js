import React from 'react';
import { Deck } from 'spectacle';
import { ThemeProvider } from 'styled-components';
import AbVariant from './AbVariant';
import createTheme from './slides/style/themes/createTheme';
import darkThemeBase from './slides/style/themes/darkTheme';
import lightThemeBase from './slides/style/themes/lightTheme';

const variants = ['darkControl', 'light'];
const themeMap = {
  darkControl: darkThemeBase,
  light: lightThemeBase,
};

function SlideDeck({ children }) {
  return (
    <AbVariant testName="themeLightDark" variants={variants}>
      {assignedVariant => {
        const theme = themeMap[assignedVariant];
        return (
          <ThemeProvider theme={theme}>
            <Deck
              contentWidth={1300}
              controlColor="primaryText"
              transition={['slide']}
              theme={createTheme(theme.colors, theme.fontFamily)}
            >
              {children}
            </Deck>
          </ThemeProvider>
        );
      }}
    </AbVariant>
  );
}

export default SlideDeck;
