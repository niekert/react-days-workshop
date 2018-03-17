import React from 'react';
import packageJsonSrc from 'img/packagejson.png';
import { Row, Column } from 'style/Flex';
import { List, ListItem } from 'style/List';
import CodeSlide from 'spectacle-code-slide';
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
import { imageSlide, ListSlide } from './Helpers';
import Terminal from 'spectacle-terminal';
import styled from 'styled-components';

export function LetsStart() {
  return (
    <Slide>
      <Heading size={3} margin={'0 0 40px 0'} textColor="primaryText">
        Let's get started
      </Heading>
      <Terminal
        title="react-days-workshop"
        output={[
          'git clone git@github.com:niekert/react-days-workshop.git \n',
          'cd react-days-workshop',
          'yarn',
          '[1/4] 🔍  Resolving packages...',
          '✨  Done in 0.73s.',
          'yarn start',
          <div style={{ color: '#7EB778' }}>
            Starting the development server...
          </div>,
        ]}
      />
    </Slide>
  );
}

export function Agenda() {
  return (
    <Slide>
      <ListSlide title="Agenda">
        <Appear>
          <ListItem>Leveraging the power of the web</ListItem>
        </Appear>
        <Appear>
          <ListItem>A quick dive into some data</ListItem>
        </Appear>
        <Appear>
          <ListItem>Implementing an AB Test</ListItem>
        </Appear>
        <Appear>
          <ListItem>Implementing UI tracking</ListItem>
        </Appear>
      </ListSlide>
    </Slide>
  );
}

export function WebPowers() {
  return (
    <Slide>
      <ListSlide title="The web's powers">
        <ListItem>You don't have to install websites</ListItem>
        <Appear>
          <ListItem>Sharing tools and code has never been easier</ListItem>
        </Appear>
        <Appear>
          <ListItem>Take this pesention as an example</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Built with https://github.com/FormidableLabs/spectacle
          </ListItem>
        </Appear>
      </ListSlide>
      <Notes>Do a demo, where we bugfix the typo in the presentation</Notes>
    </Slide>
  );
}

// export const PackageJson = () => imageSlide({ src: packageJsonSrc });

export function PackageJson() {
  return (
    <CodeSlide
      className="codeSlide"
      lang="json"
      theme="light"
      style={{
        color: 'white',
      }}
      // eslint-disable-next-line
      code={`
      {
        "name": "react-days-workshop",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
          "react": "^16.2.0",
          "react-dom": "^16.2.0",
          "spectacle": "4.1.0",
          "spectacle-code-slide": "^0.5.2",
          "spectacle-scripts": "2.0.0",
          "spectacle-terminal": "^0.5.0",
          "styled-components": "^3.2.2"
        },
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test --env=jsdom",
          "eject": "react-scripts eject"
        },
        "devDependencies": {
          "raw-loader": "^0.5.1"
        }
      }      
      `}
      ranges={[{ loc: [2, 3] }, { loc: [14, 20] }]}
    />
  );
}
