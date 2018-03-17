import React from 'react';
import { Deck } from 'spectacle';
import { ThemeProvider } from 'styled-components';
import createTheme from './slides/style/themes/createTheme';
import darkThemeBase from './slides/style/themes/darkTheme';

function SlideDeck({ children }) {
  return (
    <ThemeProvider theme={darkThemeBase}>
      <Deck
        contentWidth={1300}
        controlColor="primaryText"
        transition={['slide']}
        theme={createTheme(darkThemeBase.colors, darkThemeBase.fontFamily)}
      >
        {children}
      </Deck>
    </ThemeProvider>
  );
}

export default SlideDeck;
