// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'spectacle';
import SlideDeck from './SlideDeck';
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

export default class Presentation extends React.Component {
  render() {
    return (
      <SlideDeck>
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
      </SlideDeck>
    );
  }
}
