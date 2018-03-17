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
import Terminal from 'spectacle-terminal';
import styled from 'styled-components';

export function AbTestIntro() {
  return (
    <Slide>
      <Heading
        textAlign="left"
        size={4}
        margin={'0 0 40px 0'}
        textColor="primaryText"
      >
        AB Tests
      </Heading>
      <List>
        <ListItem>Create different versions of your product</ListItem>
        <ListItem>Find out what version works best</ListItem>
      </List>
    </Slide>
  );
}

export function AbTestExamples() {
  return <Slide />;
}
