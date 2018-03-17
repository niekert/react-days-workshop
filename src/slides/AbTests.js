import React from 'react';
import bookingAb from 'img/booking.jpg';
import googleControl from 'img/googleold.png';
import googleNew from 'img/googlenew.png';
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
import { ListSlide, imageSlide } from './Helpers';

export function AbTestIntro() {
  return (
    <Slide>
      <ListSlide title="AB Testing">
        <ListItem>Create different versions of your product</ListItem>
        <ListItem>Find out which version performs best</ListItem>
        <ListItem>Measure against a current version (Control)</ListItem>
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

export function AbTestExamples() {
  return <Slide />;
}
