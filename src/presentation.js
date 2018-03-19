// Import React
import React from 'react';

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
} from './slides/Introduction';
import {
  LetsStart,
  Agenda,
  PackageJson,
  WebPowers,
  Surge,
} from './slides/HandsOn';
import {
  ChangingProducts,
  AbTestIntro,
  GoogleControl,
  GoogleVariant,
  ExampleBooking,
  AbTestCode,
  IssuesWithApproach,
  ImplementAb,
  NowWhat,
  UsingAbVariant,
  AbVariantImpl,
} from './slides/AbTests';
import {
  IntroEventTracking,
  SettingUpMixPanel,
  InstallMixPanel,
  EventUtils,
  TrackingSurpriseButton,
  TrackSurpriseImpl,
  WhatDataWeWant,
  HowWeIncludeSlideNumber,
  UsingContextForAbTest,
  SlideNumberContextImpl,
  ReactDocsContext,
  UsingProvider,
  ImplementNewContext,
  ConsumerAbVariant,
  ButProblem,
  HowDoWeAssign,
  HocsToRescue,
} from './slides/EventTracking';
import 'prismjs/components/prism-jsx.min';
import { Provider as AbContextProvider } from './context/AbTestContext';

// Require CSS
import('normalize.css');

export default function Presentation() {
  return (
    <AbContextProvider>
      <SlideDeck>
        {Welcome()}
        {AboutMe()}
        {Intro()}
        {HowDoWeBuild()}
        {IdeaToProduct()}
        {HoldUp()}
        {WillThisWork()}
        {HowToDeal()}
        {BuildShipCheckRepeat()}
        {Agenda()}
        {LetsStart()}
        {WebPowers()}
        {PackageJson()}
        {Surge()}
        {ChangingProducts()}
        {AbTestIntro()}
        {ExampleBooking()}
        {GoogleControl()}
        {GoogleVariant()}
        {AbTestCode()}
        {IssuesWithApproach()}
        {ImplementAb()}
        {AbVariantImpl()}
        {UsingAbVariant()}
        {NowWhat()}
        {IntroEventTracking()}
        {SettingUpMixPanel()}
        {InstallMixPanel()}
        {EventUtils()}
        {TrackingSurpriseButton()}
        {TrackSurpriseImpl()}
        {WhatDataWeWant()}
        {HowWeIncludeSlideNumber()}
        {SlideNumberContextImpl()}
        {ReactDocsContext()}
        {UsingContextForAbTest()}
        {ImplementNewContext()}
        {UsingProvider()}
        {ConsumerAbVariant()}
        {ButProblem()}
        {HowDoWeAssign()}
        {HocsToRescue()}
      </SlideDeck>
    </AbContextProvider>
  );
}
