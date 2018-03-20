import React from 'react';
import bookingAb from 'img/booking.jpg';
import googleControl from 'img/googleold.png';
import googleNew from 'img/googlenew.png';
import CodeSlide from 'spectacle-code-slide';
import { ListItem } from './style/List';
import { Slide, Heading, Appear, Text, Notes } from 'spectacle';
import SurpriseButton from 'experiments/SurpriseButton';
import { ListSlide, imageSlide } from './Helpers';

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
      ranges={[{ loc: [1, 14] }, { loc: [21, 28] }]}
    />
  );
}

export function IssuesWithApproach() {
  return (
    <Slide>
      <Heading size={3} textColor="primaryText">
        What are the issues with this code?
      </Heading>
    </Slide>
  );
}

export function ImplementAb() {
  return (
    <Slide>
      <ListSlide title="Lets implement an AB test">
        <ListItem>Go to your code editor</ListItem>
        <ListItem>Open src/SlideDeck.js</ListItem>
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
        <ul>What type of tracking is interesting?</ul>
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
