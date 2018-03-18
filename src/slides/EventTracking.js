import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
import { ListItem } from 'style/List';
import reactDocsContextSrc from 'img/react_on_context.png';
import { Slide, Heading, Appear, Text, Notes } from 'spectacle';
import SurpriseButton from 'experiments/SurpriseButton';
import { ListSlide, imageSlide } from './Helpers';
import { User } from 'style/Console';

export function IntroEventTracking() {
  return (
    <Slide>
      <Heading size={3}>An introduction to event tracking</Heading>
    </Slide>
  );
}

export function SettingUpMixPanel() {
  return (
    <Slide>
      <ListSlide title="Setting up Mixpanel">
        <ListItem>Mixpanel is one of many tools for product analysis</ListItem>
        <ListItem>Track user interactions as they happen realtime</ListItem>
        <ListItem>Include any context that is relevant for our data</ListItem>
        <ListItem>Turn off your ad blockers! 😬</ListItem>
      </ListSlide>
    </Slide>
  );
}

export function InstallMixPanel() {
  return (
    <Slide>
      <Heading size={3} margin={'0 0 40px 0'} textColor="primaryText">
        Installing MixPanel in our app
      </Heading>
      <Terminal
        title="react-days-workshop"
        output={[
          <User>yarn add mixpanel-browser</User>,
          `yarn add v1.5.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...`,
          `success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ mixpanel-browser@2.18.0
info All dependencies
└─ mixpanel-browser@2.18.0
✨  Done in 6.58s.`,
        ]}
      />
    </Slide>
  );
}

export function EventUtils() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
// src/utils/events.js
import mixpanel from 'mixpanel-browser';

mixpanel.init('YOUR TOKEN');

export function trackEvent(eventName, properties) {
  mixpanel.track(eventName, properties);
}     
`}
      ranges={[
        { loc: [1, 10], note: 'Create file src/utils/events.js' },
        { loc: [4, 5], note: 'Either use your own token, or use: TODO' },
      ]}
    />
  );
}

export function TrackingSurpriseButton() {
  return (
    <Slide>
      <Heading size={3}>Tracking events for the surprise button</Heading>
      <SurpriseButton />
    </Slide>
  );
}

export function TrackSurpriseImpl() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
import { trackEvent } from 'utils/events';

class SurpriseButton extends React.Component {
  state = {
    isSurprised: false,
  };

  hideSurprise = () => {
    this.setState({ isSurprised: false });
  };

  onClick = () => {
    this.setState(
      {
        isSurprised: true,
      },
      () => {
        trackEvent('Surprise Button Clicked');
        this.timeout = setTimeout(this.hideSurprise, 2700);
      },
    );
  };

  render() {
    const { isSurprised } = this.state;

    return (
      <React.Fragment>
        <StyledButton onClick={this.onClick}>Surprise me!</StyledButton>
        <SurpriseOverlay isVisible={isSurprised} />
      </React.Fragment>
    );
  }
}
`}
      ranges={[
        { loc: [1, 2], note: 'Import the trackEvent function' },
        { loc: [18, 19], note: 'After clicking the button we track the event' },
      ]}
    />
  );
}

export function WhatDataWeWant() {
  return (
    <Slide>
      <Heading size={3}>What data is useful to include here?</Heading>
      <Notes>
        ASK AUDIENCE, LOOK AT MIXPANEL
        <ul>
          <li>Slide number?</li>
          <li>AB Test assignment (theme)</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function HowWeIncludeSlideNumber() {
  return (
    <Slide>
      <Heading size={3}>How do we find the slide number?</Heading>
      <SurpriseButton />
      <Notes>
        ASK AUDIENCE
        <ul>
          <li>URL?</li>
          <li>Let's look at React devtools</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function SlideNumberContextImpl() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
class SurpriseButton extends React.Component {
  static contextTypes = {
    store: PropTypes.shape({
      getState: PropTypes.func,
    }),
  };

  onClick = () => {
    this.setState(
      {
        isSurprised: true,
      },
      () => {
        this.timeout = setTimeout(this.hideSurprise, 2700);

        const { store } = this.context;
        const state = store.getState();
        trackEvent('Surprise Button Clicked', {
          slideNumber: state.route.slide,
        });
      },
    );
  };

  render() {
    const { isSurprised } = this.state;

    return (
      <React.Fragment>
        <StyledButton onClick={this.onClick}>Surprise me!</StyledButton>
        <SurpriseOverlay isVisible={isSurprised} />
      </React.Fragment>
    );
  }
}
`}
      ranges={[
        {
          loc: [1, 7],
          note: 'contextTypes is pretty similar to declaring propTypes',
        },
        {
          loc: [16, 21],
          note:
            'We read from the store, and include the slide number as the event payload',
        },
      ]}
    />
  );
}

export function ReactDocsContext() {
  return imageSlide({ src: reactDocsContextSrc });
}

export function UsingContextForAbTest() {
  return (
    <Slide>
      <Heading size={3}>
        Using the new Context API to get the AB test variants
      </Heading>
      <Notes>Intro for context API</Notes>
    </Slide>
  );
}
