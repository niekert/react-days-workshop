// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Text,
  List,
  SlideSet,
  Magic,
  Quote,
  Cite,
  BlockQuote,
  ListItem,
} from 'spectacle';
import { ThemeProvider } from 'styled-components';
import {
  Welcome,
  AboutMe,
  Intro,
  HowDoWeBuild,
  IdeaToProduct,
  HoldUp,
  WillThisWork,
  HowToDeal,
  BuildShipCheckRepeat,
  DevsWorry,
} from './slides/Introduction';
import {
  LetsStart,
  Agenda,
  PackageJson,
  WebPowers,
  Surge,
} from './slides/HandsOn';
import {
  AbTestIntro,
  GoogleControl,
  GoogleVariant,
  ExampleBooking,
} from './slides/AbTests';
import defaultTheme from './theme';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
import('normalize.css');

const theme = createTheme(defaultTheme.colors, defaultTheme.fontFamily);

console.log('theme is', theme);

export default class Presentation extends React.Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Deck
          transition={['slide']}
          contentWidth={1300}
          transitionDuration={500}
          bgColor="primary"
          theme={theme}
        >
          {Welcome()}
          {AboutMe()}
          {Intro()}
          {HowDoWeBuild()}
          {IdeaToProduct()}
          {HoldUp()}
          {DevsWorry()}
          {WillThisWork()}
          {HowToDeal()}
          {BuildShipCheckRepeat()}
          {Agenda()}
          {LetsStart()}
          {WebPowers()}
          {PackageJson()}
          {Surge()}
          {AbTestIntro()}
          {ExampleBooking()}
          {GoogleControl()}
          {GoogleVariant()}
        </Deck>
      </ThemeProvider>
    );
  }
}
