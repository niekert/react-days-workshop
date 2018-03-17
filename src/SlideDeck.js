import React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import defaultTheme from './theme';

const theme = createTheme(defaultTheme.colors, defaultTheme.fontFamily);

function SlideDeck({ children }) {
  return (
    <Deck contentWidth={1300} theme={theme} bgColor="primary">
      {children}
    </Deck>
  );
}

export default SlideDeck;
