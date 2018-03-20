import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
import { ListItem } from 'style/List';
import reactDocsContextSrc from 'img/react_on_context.png';
import hocGithubSrc from 'img/usehoc.png';
import { Slide, Heading, Notes } from 'spectacle';
import SurpriseButton from 'experiments/SurpriseButton';
import { ListSlide, imageSlide } from './Helpers';
import { User } from 'style/Console';
import { FlashyText } from 'style/Typography';

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
        <ListItem>
          Turn off your ad blockers!{' '}
          <span role="img" aria-label="grimacing">
            😬
          </span>
        </ListItem>
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
  return imageSlide({
    src: reactDocsContextSrc,
  });
}

export function UsingContextForAbTest() {
  return (
    <Slide transition={['spin']}>
      <Heading size={3}>
        Using the <FlashyText>new</FlashyText> Context API
      </Heading>
      <Notes>Intro for context API</Notes>
    </Slide>
  );
}

export function ImplementNewContext() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
import React, { createContext } from 'react';
import { getAssignedVariants, storeAssignedVariant } from 'utils/abTests';

const AbContext = createContext();

export class Provider extends React.Component {
  state = getAssignedVariants();

  assignVariant = (testName, variants) => {
    const assignedVariant =
      variants[Math.floor(Math.random() * variants.length)];

    storeAssignedVariant(testName, assignedVariant);

    this.setState({
      [testName]: assignedVariant,
    });
  };

  render() {
    return (
      <AbContext.Provider
        value={{ assignedVariants: this.state, assignVariant: this.assignVariant }}
      >
        {this.props.children}
      </AbContext.Provider>
    );
  }
}

export const Consumer = AbContext.Consumer;




`}
      ranges={[
        {
          loc: [1, 2],
          note: 'React exports a new "createContext" function',
        },
        {
          loc: [2, 3],
          note: 'Note how we import these utilities, they are not relevant for our implementation',
        },
        {
          loc: [4, 5],
          note: 'Calling the createContext function returns a Context object',
        },
        {
          loc: [6, 21],
          note:
            'A regular React component keeps the state of all the AB we have assigned',
        },
        {
          loc: [7, 8],
          note:
            'getAssignedVariants() is a helper function to read everything stored in localStorage',
        },
        {
          loc: [9, 19],
          note: 'assignVariant() looks pretty similar to what we wrote before',
        },
        {
          loc: [20, 30],
          note: 'AbContext.Provider comes from createContext()',
        },
        {
          loc: [23, 24],
          note: 'Notice what we pass to the value prop',
        },
        {
          loc: [25, 26],
          note: 'Pass through any children',
        },
        {
          loc: [31, 32],
          note: 'Notice how we also export a Consumer',
        },
      ]}
    />
  );
}

export function UsingProvider() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
//src/Presentation.js
import { Provider as AbContextProvider } from './context/AbTestContext';

export default function Presentation() {
  return (
    <AbContextProvider>
      <SlideDeck>
        {...}
      </SlideDeck>
    </AbContextProvider>
  );
}
`}
      ranges={[
        {
          loc: [1, 15],
          note: 'We wrap the entire presentation in an AbContextProvider',
        },
        {
          loc: [6, 11],
          note: 'We wrap the entire presentation in an AbContextProvider',
        },
      ]}
    />
  );
}

export function ConsumerAbVariant() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
// src/AbVariant.js
import React from 'react';
import PropTypes from 'prop-types';
import { Consumer as AbContextConsumer } from './context/AbTestContext';

class AbVariant extends React.Component {
  static propTypes = {
    testName: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.func,
  };

  render() {
    const { testName } = this.props;
    return (
      <AbContextConsumer>
        {({ assignedVariants }) => {
          const assignedVariant = assignedVariants[testName];
          return this.props.children(assignedVariant);
        }}
      </AbContextConsumer>
    );
  }
}

export default AbVariant;      
`}
      ranges={[
        {
          loc: [1, 31],
        },
        {
          loc: [4, 5],
          note: 'We will import a Consumer from the reat AbTestContext file',
        },
        {
          loc: [7, 12],
          note: 'The component propTypes remain the same!',
        },
        {
          loc: [14, 24],
        },
        {
          loc: [16, 22],
          note: 'Again children are used as a render prop!',
        },
      ]}
    />
  );
}

export function ButProblem() {
  return (
    <Slide>
      <Heading size={3}>But... There is a problem!</Heading>
      <Notes>
        ASK AUDIENCE WHAT TO DO
        <ul>
          <li>URL?</li>
          <li>Let's look at React devtools</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function HowDoWeAssign() {
  return (
    <Slide>
      <Heading size={3}>
        How do we <FlashyText>assign</FlashyText> users to a group?
      </Heading>
      <Notes>
        ASK AUDIENCE WHAT TO DO
        <ul>
          <li>URL?</li>
          <li>Let's look at React devtools</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function HocContextGithub() {
  return imageSlide({ src: hocGithubSrc });
}

export function HocsToRescue() {
  return (
    <Slide>
      <Heading size={3}>Higher Order Components to the rescue!</Heading>
      <Notes>
        ASK AUDIENCE WHAT TO DO
        <ul>
          <li>URL?</li>
          <li>Let's look at React devtools</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function ConsumerHoc() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
import React, { createContext } from 'react';

const AbContext  = createContext(null);

export const withAbContext = (ComposedComponent) => (props) =>
  <AbContext.Consumer>
    {contextProps => (
      <ComposedComponent {...contextProps} {...props} />
    )}
  </AbContext.Consumer>
`}
      ranges={[
        {
          loc: [0, 13],
          note: 'We create a withAbContext HOC by exporting a function',
        },
        {
          loc: [5, 6],
          note: 'We create a withAbContext HOC by exporting a function',
        },
        {
          loc: [6, 11],
          note: 'The API for the Consumer remains the same, except now it returns the ComposedComponent',
        },
      ]}
    />
  );
}


export function HowToUseHoc() {
  return (
    <Slide>
      <Heading size={3}>How do we use this HOC?</Heading>
    </Slide>
  );
}

export function UseHocAbVariant() {
  return (
    <Slide>

    </Slide>
  )
}