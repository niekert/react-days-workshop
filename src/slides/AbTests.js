import React from 'react';
import bookingAb from 'img/booking.jpg';
import googleControl from 'img/googleold.png';
import googleNew from 'img/googlenew.png';
import CodeSlide from 'spectacle-code-slide';
import preloadImage from 'utils/preloadImage';
import { ListItem } from './style/List';
import { FlashyText } from './style/Typography';
import { Slide, Heading, Appear, Text, Notes } from 'spectacle';
import SurpriseButton from 'experiments/SurpriseButton';
import { ListSlide, imageSlide } from './Helpers';

preloadImage(bookingAb);
preloadImage(googleControl);
preloadImage(googleNew);

export function ChangingProducts() {
  return (
    <Slide>
      <Heading size={5} margin="0 0 30px 0">
        We often change existing products instead of building something
        completely new
      </Heading>
      <Appear>
        <Text textColor="secondaryText">How to justify the change?</Text>
      </Appear>
    </Slide>
  );
}

export function AbTestIntro() {
  return (
    <Slide>
      <ListSlide title="AB Testing">
        <ListItem>Create different versions of your product</ListItem>
        <ListItem>Find out which version performs best</ListItem>
        <ListItem>Measure against a current version (Control)</ListItem>
        <SurpriseButton />
      </ListSlide>
      <Notes>
        <ul>
          <li>Ab Tests are a commonly used technique in many tech companies</li>
          <li>The goal is to not disrupt the user experience</li>
          <li>
            You want to try to find out what version of your test (version A or
            version B works best)
          </li>
          <li>
            It's important that you measure against a current version to compare
            with
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function AbTestKeepInMind() {
  return (
    <Slide>
      <ListSlide title="AB Testing challenges">
        <ListItem>
          What do you <FlashyText>Actually</FlashyText> want to measure
        </ListItem>
        <Appear>
          <ListItem>Avoiding disruptance of the user experience</ListItem>
        </Appear>
        <Appear>
          <ListItem>When can a test be considered done?</ListItem>
        </Appear>
        <Appear>
          <ListItem>Which tools do do you use for this?</ListItem>
        </Appear>
      </ListSlide>
      <Notes>
        <ul>
          <li>
            The most important thing to do before starting with an AB test, is
            deciding which metrics you want to measure against.
          </li>
          <li>Do you want to improve conversion?</li>
          <li>Do you want people to stick around on your page longer? etc.</li>

          <li>
            Make sure sure AB tests are persisted for users so they do not see
            different versions of an experiment all the time.
          </li>

          <li>
            With AB tests it's difficult to tell when a test can be considered
            done. It depends on the type of test and also depends on how much
            data you have gathered. Typically AB tests run anywhere from between
            2 weeks to 9 months
          </li>

          <li>
            There are a lot of AB testing tools for specifially out there. How
            do you know which one is right for you?$ Well.. Actually,
            implementing a basic AB testing system in a React app is not very
            difficult.
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function ExampleBooking() {
  return imageSlide({ src: bookingAb, transition: ['fade'] });
}

export function GoogleControl() {
  return imageSlide({ src: googleControl, transition: ['fade'] });
}

export function GoogleVariant() {
  return imageSlide({ src: googleNew, transition: ['none'] });
}

export function AbTestCode() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      // eslint-disable-next-line
      code={`
function assignVariant(variants) {
  // Get a random value from the array
  return variants[Math.floor(Math.random() * variants.length)];
}

function ColoredLink({ children, href }) {
  const variants = ['red', 'blue'];

  // What is the issue here?
  const assignedVariant = assignVariant(variants);

  return <a href={href} style={{ color: assignedVariant }}>{children}</a>
}
`}
      ranges={[
        { loc: [1, 5], note: 'Create a function to pick from the variants' },
        {
          loc: [5, 15],
          note: 'Use the return value of this function to style a link',
        },
      ]}
    />
  );
}

export function BasicImplAb() {
  return (
    <Slide>
      <Heading size={3} textColor="primaryText">
        A basic AB Test implementation in React
      </Heading>
    </Slide>
  );
}

export function AbTestComponents() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      // eslint-disable-next-line
      code={`
function assignVariant(variants) {
  // Get a random value from the array
  return var[Math.floor(Math.random() * myArray.length)];
}

function ColoredLink({ children, href }) {
  const variants = ['red', 'blue'];

  // What is the issue here?
  const assignedVariant = assignVariant(variants);

  return <a href={href} style={{ color: assignedVariant }}>{children}</a>
}
`}
      ranges={[{ loc: [0, Infinity] }, { loc: [1, 14] }, { loc: [21, 28] }]}
    />
  );
}

export function IssuesWithApproach() {
  return (
    <Slide>
      <Heading size={3} textColor="primaryText">
        What are the issues with this code?
      </Heading>
      <Notes>
        <ul>
          <li>AB test assignment are not saved</li>
          <li>The assignment could change with each re-render</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function ImplementAb() {
  return (
    <Slide>
      <ListSlide title="Let's implement an AB test">
        <ListItem>Time to open up your editors!</ListItem>
        <ListItem>Open up src/SlideDeck.js</ListItem>
      </ListSlide>
      <Notes>
        <ul>
          <li>We will implement an AB test to switch theme?</li>
          <li>What do we see in this file?</li>
          <li>What is this theme we already have?</li>
          <li>How do we go abouts doing this?</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function AbVariantImpl() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      // eslint-disable-next-line
      code={`
import React from 'react';
import PropTypes from 'prop-types';

function assignVariant(name, variants) {
  const storedVariant = localStorage.getItem(\`ab-test-\${name}\`);
  if (storedVariant) {
    return storedVariant;
  }

  // Get a random value from the array
  const assignedVariant = variants[Math.floor(Math.random() * variants.length)];

  localStorage.setItem(\`ab-test-\${name}\`, assignedVariant);

  return assignedVariant;
}

class AbVariant extends React.Component {
  static propTypes = {
    testName: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.func,
  };

  constructor(props) {
    super(props);

    const { testName, variants } = props;
    this.assignedVariant = assignVariant(testName, variants);
  }

  render() {
    return this.props.children(this.assignedVariant);
  }
}

export default AbVariant;      





`}
      ranges={[
        { loc: [1, 3], note: 'We are building a React component' },
        {
          loc: [4, 17],
          note: 'We use localStorage to persist the assigned variant',
        },
        {
          loc: [5, 9],
          note: "Return the stored value if it's found",
        },
        {
          loc: [11, 16],
          note:
            'Or calculate the value and store it in localStorage before returning',
        },
        {
          loc: [19, 24],
          note:
            'To make this component generic and re-usable, we add these prop types',
        },
        {
          loc: [25, 31],
          note:
            'Store the variant as a class property when the React element is created',
        },
        {
          loc: [32, 35],
          note: 'We call children as a function in render.',
        },
      ]}
    />
  );
}

export function NowWhat() {
  return (
    <Slide>
      <Heading size={3}>Now what?</Heading>
      <Notes>
        No, we don't really have anything specific we want to measure here, and
        the AB test spans the entire application, making it very broad.
        <ul>
          <li>ASK AUDIENCE: What tracking could be interesting here?</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function UsingAbVariant() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="jsx"
      // eslint-disable-next-line
      code={`
// src/SlideDeck.js
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

export default SlideDeck;`}
      ranges={[
        { loc: [1, 2], note: 'Open up src/SlideDeck.js' },
        { loc: [2, 9], note: 'Add some extra imports' },
        {
          loc: [10, 15],
          note: 'Add AB test variants, and create a mapping to themes',
        },
        { loc: [16, 38] },
        {
          loc: [18, 21],
          note:
            'Implement the AbVariant with function as a child and assign the theme',
        },
        { loc: [21, 34], note: 'Pick the theme based on the assigned variant' },
      ]}
    />
  );
}
