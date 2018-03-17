import React from 'react';
import niekSrc from 'img/niek.png';
import uhhSrc from 'img/uhh.gif';
import yourBossSrc from 'img/yourboss.png';
import holdupSrc from 'img/holdup.jpeg';
import { Row, Column } from 'style/Flex';
import { List, ListItem } from 'style/List';
import {
  Slide,
  SlideSet,
  Layout,
  Image,
  Heading,
  Text,
  Appear,
  Notes,
} from 'spectacle';
import styled from 'styled-components';

const ListWrapper = styled.div`
  margin-left: 26px;
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
      <Heading lineHeight={2}>🙋🏻‍♂️ I'm Niek</Heading>
      <Row>
        <ListWrapper>
          <List start={1}>
            <ListItem>🇳🇱</ListItem>
            <ListItem>Frontend Engineer at MessageBird</ListItem>
            <ListItem>https://github.com/niekert</ListItem>
            <ListItem>I like React 🤡</ListItem>
          </List>
        </ListWrapper>
      </Row>
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
        How do we build frontend products?
      </Heading>
      <Notes>
        Ask audience what their process is
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
  return (
    <Slide>
      <Image src={yourBossSrc} width={700} />
    </Slide>
  );
}

export function DevsWorry() {
  return (
    <Slide transition={['fade']} maxHeight="100%">
      <Row>
        <Image src={holdupSrc} />
      </Row>
      <List>
        <Appear>
          <ListItem>Where do we get the data from</ListItem>
        </Appear>
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
          <ListItem>Is this even a good idea?</ListItem>
        </Appear>
      </List>
    </Slide>
  );
}

export function WillThisWork() {
  return (
    <Slide transition={['fade']}>
      <Heading size={2} textColor="primaryText" margin="0 0 20px 0">
        Is this even a good idea?
      </Heading>
      <Appear>
        <Text size={2} textColor="primaryText">
          Nobody knows (until it's actually in use)
        </Text>
      </Appear>
    </Slide>
  );
}

export function HowToDeal() {
  return (
    <Slide transition={['slide']}>
      <Heading textAlign="left" size={4} textColor="primaryText">
        Dealing with unknowns
      </Heading>
      <List>
        <ListItem>Try to found out what works</ListItem>
        <ListItem>Use data to get to know your users</ListItem>
        <Appear>
          <ListItem>Build, ship, check, repeat</ListItem>
        </Appear>
      </List>
    </Slide>
  );
}
