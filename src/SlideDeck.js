import React from 'react';
import { Deck } from 'spectacle';
import AbVariant from './AbVariant';
import { ThemeProvider } from 'styled-components';
import createTheme from './themes/createTheme';
import darkThemeBase from './themes/darkTheme';
import lightThemeBase from './themes/lightTheme';

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
              bgColor="primary"
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
