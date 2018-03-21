import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
import { ListItem } from './style/List';
import reactDocsContextSrc from 'img/react_on_context.png';
import hocGithubSrc from 'img/usehoc.png';
import { Appear, Slide, Heading, Notes } from 'spectacle';
import SurpriseButton from 'experiments/SurpriseButton';
import { ListSlide, imageSlide } from './Helpers';
import { User } from './style/Console';
import preloadImage from 'utils/preloadImage';
import { FlashyText } from './style/Typography';

preloadImage(reactDocsContextSrc);
preloadImage(hocGithubSrc);

export function IntroEventTracking() {
  return (
    <Slide>
      <Heading size={3}>An introduction to event tracking</Heading>
      <Notes>
        <ul>
          <li>
            Let's start by taking a look at event tracking. Also for this, there
            are many tools available. But we will be using mixpanel
          </li>
          <li>
            Show a Mixpanel demo, and encourage users to sign up for their own
            account for the rest of the workshop
          </li>
        </ul>
      </Notes>
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
      <Notes>
        <ul>
          <li>TAKE A LOOK AT package on NPM website</li>
        </ul>
      </Notes>
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
        { loc: [4, 5], note: 'Either use your own token, or use mine.' },
      ]}
    />
  );
}

export function TrackingSurpriseButton() {
  return (
    <Slide>
      <Heading size={3}>Tracking events for the surprise button</Heading>
      <SurpriseButton />
      <Notes>
        <ul>
          <li>There is this surprise button in our presentation</li>
          <li>It does look quite a bit different on both the themes</li>
          <li>It's a lot harder to see on the light theme.</li>
          <li>
            Do we actually want people to click it, or do we want it to be semi
            hidden?
          </li>
          <li>
            We will add events to figure out how many times it was clicked.
          </li>
        </ul>
      </Notes>
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
          <li>Open up React devtools and take a look at the props / context</li>
          <li>Show how you can do store.getState()</li>
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

export function WhatElseDoWeNeed() {
  return (
    <Slide>
      <Heading size={3}>Including the AB test assignment</Heading>
      <Notes>
        <ul>
          <li>
            We can now see on which slide the surprise button gets clicked
          </li>
          <li>But we still don't know which theme the user was on</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function UsingContextForAbTest() {
  return (
    <Slide transition={['spin']}>
      <Heading size={3}>
        Using the <FlashyText>new</FlashyText> Context API
      </Heading>
      <Notes>
        <ul>
          <li>
            We just saw the mention in the React context docs about a new
            Context API becoming avilable
          </li>
          <li>
            That API is already available in a new version of React, React 16.3
          </li>
          <li>Let's use the alpha!</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function UpdateReactAlpha() {
  return (
    <Slide>
      <Terminal
        title="react-days-workshop"
        output={[
          <User>
            yarn add react@16.3.0-alpha.2 <br /> react-dom@16.3.0-alpha.2
          </User>,
          `yarn add v1.5.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...`,
          `success Saved lockfile.
success Saved 2 new dependencies.
✨  Done in 6.58s.`,
        ]}
      />
      <Notes>
        <ul>
          <li>TAKE A LOOK AT package on NPM website</li>
        </ul>
      </Notes>
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
          note:
            'Note how we import these utilities, they are not relevant for our implementation',
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
          note:
            'The API for the Consumer remains the same, except now it returns the ComposedComponent',
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
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
// src/AbVariant.js
import React from 'react';
import PropTypes from 'prop-types';
import { withAbContext } from './context/AbTestContext';

class AbVariant extends React.Component {
  static propTypes = {
    // These props are injected by the higher-order-component
    assignVariant: PropTypes.func.isRequired,
    assignedVariants: PropTypes.object.isRequired,
    testName: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.func,
  };

  getAssignedVariant () {
    const { assignedVariants, testName} = this.props;
    return assignedVariants[testName];
  }
  
  componentDidMount() {
    if (!this.getAssignedVariant()) {
      return this.props.assignVariant(this.props.testName, this.props.variants);
    }
  }

  render() {
    const assignedVariant = this.getAssignedVariant();

    return this.props.children(assignedVariant);
  }
}

export default withAbContext(AbVariant);





`}
      ranges={[
        {
          loc: [0, 25],
        },
        {
          loc: [4, 5],
          note: 'Import the withAbContext HOC',
        },
        {
          loc: [34, 35],
          note: 'Wrap the AbVariant in a withAbContext function call',
        },
        {
          loc: [7, 11],
          note:
            'These now get injected as props because of the higher order component',
        },
        {
          loc: [16, 26],
          note:
            "And because they're just props, we can also use them in lifecycle methods!",
        },
        {
          loc: [21, 26],
          note:
            "If there's no variant assigned yet, we will make sure to assign it as the component mounts.",
        },
      ]}
    />
  );
}

export function WhyDidWeDoThis() {
  return (
    <Slide>
      <Heading size={3}>
        Soo... Why did we go through all this trouble again?
      </Heading>
      <SurpriseButton />
    </Slide>
  );
}

export function BecauseWeWantContext() {
  return (
    <Slide>
      <Heading size={3}>
        Because we want the <FlashyText>context</FlashyText> for tracking events
      </Heading>
    </Slide>
  );
}

export function AbTestImplSurpriseButton() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
// src/experiments/SurpriseButton.js
import React from 'react';
import PropTypes from 'prop-types';
import { withAbContext } from './context/AbTestContext';

class SurpriseButton extends React.Component {
  static propTypes = {
    // Injected by withAbContext HOC
    assignedVariants: PropTypes.object.isRequired,
  };

  ...

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
          ...this.props.assignedVariants,
        });
      },
    );
  };

  ...
}

export default withAbContext(SurpriseButton);






`}
      ranges={[
        {
          loc: [0, 25],
        },
        {
          loc: [4, 5],
          note: 'Import the withAbContext HOC',
        },
        {
          loc: [7, 11],
          note: 'These propTypes also get injected',
        },
        {
          loc: [35, 36],
          note:
            'Because we wrap the component with the withAbContext HOC again',
        },
        {
          loc: [24, 28],
          note: 'And we include the assignedVariants in the trackEvent call',
        },
      ]}
    />
  );
}

export function IsThisScalable() {
  return (
    <Slide>
      <Heading size={3}>Is this a scalable solution?</Heading>
      <Appear>
        <Heading size={5}>How can we improve?</Heading>
      </Appear>
    </Slide>
  );
}

export function ComposeWithTrackingContext() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      code={`
import React from 'react';
import PropTypes from 'prop-types';
import { withAbContext } from '../context/AbTestContext';
import compose from '../utils/compose';
import { trackEvent } from '../utils/events';

const withTrackingContext = ComposedComponent =>
  class TrackingContext extends React.Component {
    static contextTypes = {
      assignedVariants: PropTypes.object,
      store: PropTypes.shape({
        getState: PropTypes.func,
      }),
    };

    trackEvent = (eventName, eventProps) => {
      const { assignedVariants } = this.props;
      const { store } = this.context;
      const storeState = store.getState();

      trackEvent(eventName, {
        slideNumber: storeState.route.slide,
        ...assignedVariants,
        ...eventProps,
      });
    };

    render() {
      return <ComposedComponent trackEvent={this.trackEvent} {...this.props} />;
    }
  };

export default compose(withAbContext, withTrackingContext);
      






`}
      ranges={[
        {
          loc: [0, 25],
        },
        {
          loc: [7, 8],
          note: 'We create another HOC',
        },
        {
          loc: [9, 14],
          note:
            'We include the contextType for the Redux store, what we had in SurpriseButton before',
        },
        {
          loc: [16, 27],
          note:
            'The trackEvent function already includes AB test and slide number context for',
        },
        {
          loc: [29, 30],
          note:
            'Pass the trackEvent function as a prop to the wrapped component',
        },
        {
          loc: [33, 34],
          note:
            'We make use of the withAbContext HOC we made earlier to get the AB test context',
        },
      ]}
    />
  );
}

export function Recap() {
  return (
    <Slide>
      <ListSlide title="Recap">
        <ListItem>
          Try to include as much context as possible when tracking events
        </ListItem>
        <ListItem>
          The new Context API is very suited for these types of things
        </ListItem>
        <ListItem>
          You can use React's powerful composition model to get you the right
          data where you need it
        </ListItem>
      </ListSlide>
      <Notes>
        <ul>
          <li>
            As we've seen in MixPanel you can combine data with all the
            different properties that you send to a an event. Because of this it
            is useful to include as much context as possible
          </li>
          <li>
            The new context api is great for this, it's kinda in the word
            already. You don't have to make your components dirty
          </li>
          <li>
            The react composition model is really powerful for combining the
            data you need
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function LastThingsToConsider() {
  return (
    <Slide>
      <ListSlide title="Final notes">
        <ListItem>Be prepared to be disappointed by the data</ListItem>
        <Appear>
          <ListItem>
            Triple check if the data you're tracking is correct
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Be open & honest about mistakes or bugs in the tracking data
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Learn by doing</ListItem>
        </Appear>
      </ListSlide>
      <Notes>
        I want to end off with some final notes about things I've personally
        encountered while using this method in products i've worked on.
        <ul>
          <li>
            Be perpared to be disappointed by data. You may have worked on a new
            feature for a while, and after shipping it, you realise it is not
            being used, or is being used less than the previous variant. This
            can be tough
          </li>
          <li>
            Nothing's more important than sending the correct data, because if
            you're looking at data that is incorrect it is actiually quite
            meaningless
          </li>
          <li>
            If mistakes are made in the data tracking (trust me, this will
            happen), the best thing to do is to be open & honest about it.
            Rather than keeping things for yourself because you're afraid you
            might ruin an AB test
          </li>
          <li>
            Learn by doing. AB Testing and UI tracking is a very broad subject
            where you can do a lot of things good or bad. The best way to learn
            what works for your company is by simply doing it, and finding out
            what works and what doesn't.
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}
