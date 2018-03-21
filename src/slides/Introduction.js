import React from 'react';
import yourBossSrc from 'img/yourboss.png';
import holdupSrc from 'img/holdup.jpeg';
import { List, ListItem } from './style/List';
import { imageSlide, ListSlide } from './Helpers';
import { Slide, Heading, Text, Appear, Notes } from 'spectacle';
import { FlashyText } from './style/Typography';
import styled from 'styled-components';

const Center = styled.div`
  align-self: center;
`;

export function Welcome() {
  return (
    <Slide transition={['slide']}>
      <Heading size={1} fit caps lineHeight={1} textColor="primaryText">
        Build, Ship, Check, Repeat
      </Heading>
      <Heading size={5} textColor="primaryText">
        Niek Kruse
      </Heading>
      <Notes>
        <ul>
          <li>
            Last talk of the conference, hope y'all had fun and still have
            energy for this one
          </li>{' '}
          <li>
            - How do you ship products quickly and learn from what you've
            shipped
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function AboutMe() {
  return (
    <Slide transition={['slide']} maxWidth={1900}>
      <Heading lineHeight={2}>
        <span role="img" aria-label="waving">
          🙋🏻‍♂️
        </span>{' '}
        I'm Niek
      </Heading>
      <Center>
        <List start={1}>
          <ListItem>
            <span role="img" aria-label="nl-flag">
              🇳🇱
            </span>
          </ListItem>
          <ListItem>Frontend Engineer at MessageBird</ListItem>
          <ListItem>https://github.com/niekert</ListItem>
          <ListItem>I like building things in React</ListItem>
        </List>
      </Center>
      <Notes>
        <ul>
          <li>
            - This is my first ever work shop, tried my best in terms of timing
            and everyhting but please cut some slack{' '}
          </li>
          <li>
            - Feel free to interrupt me or ask questions if something is not
            clear
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function Intro() {
  return (
    <Slide fill>
      <Heading margin="0 0 100px 0">Before we start</Heading>
      <Heading size={5} textColor="primaryText">
        Follow along with the slides <br /> <br />
        https://react-days-workshop.surge.sh
      </Heading>
      <Notes>
        <ul>
          <li>It'a a good idea to follow along with the code samples</li>
          <li>Easier to read and ask questions</li>
          <li>Please interrupt me if you have questions</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function HowDoWeBuild() {
  return (
    <Slide>
      <Heading size={3} textColor="primaryText">
        What's your (company's) process for building a product?
      </Heading>
      <Notes>
        There is not one answer to this question. If I ask everyone in the
        audience, people will respond differently but with similarities, (ask
        audience) summarize:
        <ul>
          <li>Do you use sprints?</li>
          <li>What about a product manager?</li>
          <li>When does it become your dev's task?</li>
          <li>When do you ship?</li>
          <li>How do you know that what you shipped performs?</li>
          <li>Do you have QA?</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function IdeaToProduct() {
  return imageSlide({ src: yourBossSrc, width: '80%' });
}

export function HoldUp() {
  return imageSlide({ src: holdupSrc, transition: ['zoom'] });
}

export function DevsWorry() {
  return (
    <Slide transition={['fade']} maxHeight="100%">
      <List>
        <ListItem>We don't have an API to do that</ListItem>
        <Appear>
          <ListItem>This will not play nicely with feature X...</ListItem>
        </Appear>
        <Appear>
          <ListItem>That animation will take a lot of work</ListItem>
        </Appear>
        <Appear>
          <ListItem>How do we build this component?</ListItem>
        </Appear>
        <Appear>
          <ListItem>This will never work on IE...</ListItem>
        </Appear>
        <Appear>
          <ListItem>Is this feature even a good idea?</ListItem>
        </Appear>
      </List>
    </Slide>
  );
}

export function WillThisWork() {
  return (
    <Slide transition={['zoom']}>
      <Heading size={2} textColor="primaryText" margin="0 0 20px 0">
        Is this feature even a good idea?
      </Heading>
      <Appear>
        <Text size={2} textColor="primaryText">
          You won't know until it's actually in use
        </Text>
      </Appear>
      <Notes>
        As good as an idea might sound, you never really know if something
        performs in the way you expect it to perform
      </Notes>
    </Slide>
  );
}

export function HowToDeal() {
  return (
    <Slide transition={['fade']}>
      <ListSlide title="How do you find out if something works?">
        <Appear>
          <ListItem>
            <FlashyText>Build</FlashyText> something that works first
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <FlashyText>Ship</FlashyText> as an MLP (Minimal Lovable Product) to
            a % of users
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <FlashyText>Check</FlashyText> how users respond to this change
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <FlashyText>Repeat</FlashyText> this process by using your learnings
          </ListItem>
        </Appear>
      </ListSlide>
      <Notes>
        <ul>
          <li>
            Building something that works before starting with optimizations.
            Look at packages and improvements. <br />
            Don't prematurely optimize, or work on support for IE if you're not
            even sure if something works
          </li>
          <li>
            Ship a first version that you think is acceptable for your clients
            or users. This is up to your company to decide
          </li>
          <li>
            Check if what you're building / you've built is actually performing
            in the way you want it to perform <br />
            In this workshop we'll take a closer look at the things we can use
            for this
          </li>
          <li>Learn from your data.</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export function BuildShipCheckRepeat() {
  return (
    <Slide transition={['fade']}>
      <ListSlide title="How do you find out if something works?">
        <ListItem>
          <FlashyText>Build</FlashyText>
        </ListItem>
        <ListItem>
          <FlashyText>Ship</FlashyText>
        </ListItem>
        <ListItem>
          <FlashyText>Check</FlashyText>
        </ListItem>
        <ListItem>
          <FlashyText>Repeat</FlashyText>
        </ListItem>
      </ListSlide>
    </Slide>
  );
}
