import React from 'react';
import { Deck } from 'spectacle';
import AbVariant from './AbVariant';
import createTheme from './themes/createTheme';
import defaultTheme from './themes/defaultTheme';
import lightThemeTemplate from './themes/lightTheme';

const darkTheme = createTheme(defaultTheme.colors, defaultTheme.fontFamily);
const lightTheme = createTheme(
  lightThemeTemplate.colors,
  lightThemeTemplate.fontFamily,
);

const variants = ['darkControl', 'light'];
const themeMap = {
  darkControl: darkTheme,
  light: lightTheme,
};

function SlideDeck({ children }) {
  return (
    <AbVariant testName="themeLightDark" variants={variants}>
      {variant => {
        return (
          <Deck
            contentWidth={1300}
            controlColor="primaryText"
            theme={themeMap[variant]}
            bgColor="primary"
          >
            {children}
          </Deck>
        );
      }}
    </AbVariant>
  );
}

export default SlideDeck;
