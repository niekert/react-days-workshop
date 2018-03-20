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
    </Slide>
  );
}

export function AboutMe() {
  return (
    <Slide transition={['slide']} maxWidth={1900}>
      <Heading lineHeight={2}>
        <span role="img" aria-label="waving">
          🙋�
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
          <ListItem>I like buildig things in React</ListItem>
        </List>
      </Center>
    </Slide>
  );
}

export function Intro() {
  return (
    <Slide fill>
      <Heading margin="0 0 100px 0">Before we start</Heading>
      <Heading size={5} textColor="primaryText">
        Follow along with the slides <br />
        ## TODO: Link
      </Heading>
    </Slide>
  );
}

export function HowDoWeBuild() {
  return (
    <Slide>
      <Heading size={3} textColor="primaryText">
        How do you build a product?
      </Heading>
      <Notes>
        There is not one answer to this question. If I ask everyone in the
        audience, people will respond differently but with similarities, (ask
        audience) summarize:
        <ul>
          <li>Do you use sprints?</li>
          <li>What about a product manager?</li>
          <li>When does it become your dev's task?</li>
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
    </Slide>
  );
}

export function HowToDeal() {
  return (
    <Slide transition={['fade']}>
      <ListSlide title="What's the quickest way to find out?">
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
    </Slide>
  );
}

export function BuildShipCheckRepeat() {
  return (
    <Slide transition={['fade']}>
      <ListSlide title="What's the quickest way to find out?">
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
