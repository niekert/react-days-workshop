import React from 'react';
import { Deck } from 'spectacle';
import AbVariant from './AbVariant';
import { ThemeProvider } from 'styled-components';
import createTheme from './style/themes/createTheme';
import darkThemeBase from './style/themes/darkTheme';
import lightThemeBase from './style/themes/lightTheme';

const variants = ['darkControl', 'light'];
const themeMap = {
  darkControl: darkThemeBase,
  light: lightThemeBase,
};

function SlideDeck({ children }) {
  return (
    <AbVariant testName="themeLightDark" variants={variants}>
      {assignedVariant => {
        const theme = themeMap[assignedVariant] || darkThemeBase;
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
