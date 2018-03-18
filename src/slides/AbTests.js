import React from 'react';
import bookingAb from 'img/booking.jpg';
import googleControl from 'img/googleold.png';
import googleNew from 'img/googlenew.png';
import CodeSlide from 'spectacle-code-slide';
import { Row, Column } from 'style/Flex';
import { List, ListItem } from 'style/List';
import { Slide, Heading, Appear, Text, Notes } from 'spectacle';
import styled from 'styled-components';
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
      lang="js"
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
      lang="js"
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
      lang="js"
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
          loc: [18, 31],
          note: 'Create a new class and set the variant as a class property',
        },
        {
          loc: [19, 24],
          note: 'To make this component generic, we add these prop types',
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
      lang="js"
      // eslint-disable-next-line
      code={`
import React from 'react';
import { Deck } from 'spectacle';
import AbVariant from './AbVariant';
import createTheme from './themes/createTheme';
import darkThemeTemplate from './themes/darkTheme';
import lightThemeTemplate from './themes/lightTheme';

const darkTheme = createTheme(
  darkThemeTemplate.colors,
  darkThemeTemplate.fontFamily
);
const lightTheme = createTheme(
  lightThemeTemplate.colors,
  lightThemeTemplate.fontFamily,
);


const variants = ['darkControl', 'light'];
const themeMap = {
  darkControl: darkTheme,
  light: lightTheme,
};

function SlideDeck({ children }) {
  return (
    <AbVariant testName="themeLightDark" variants={variants}>
      {variant => (
        <Deck
          contentWidth={1300}
          controlColor="primaryText"
          theme={themeMap[variant]}
          bgColor="primary"
        >
          {children}
        </Deck>
      )}
    </AbVariant>
  );
}

export default SlideDeck;
      `}
      ranges={[
        { loc: [1, 7], note: 'Add some extra imports' },
        { loc: [8, 16], note: 'Create a light theme as well' },
        {
          loc: [18, 24],
          note: 'Create the variants and a mapping for themes',
        },
        { loc: [24, 40] },
        {
          loc: [26, 28],
          note: 'Implement the AbVariant with function as a child',
        },
        { loc: [31, 32], note: 'Pick the theme based on the assigned variant' },
      ]}
    />
  );
}
