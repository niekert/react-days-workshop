import React from 'react';
import packageJsonSrc from 'img/packagejson.png';
import { Row, Column } from 'style/Flex';
import { List, ListItem } from 'style/List';
import { User } from 'style/Console';
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
          <User>git clone git@github.com:niekert/react-days-workshop.git</User>,
          <User>cd react-days-workshop</User>,
          <User>yarn</User>,
          `[1/4] 🔍  Resolving packages...
✨  Done in 0.73s.
`,
          <User>yarn start</User>,
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
          <ListItem>Strengths of the (modern) web</ListItem>
        </Appear>
        <Appear>
          <ListItem>Implementing an AB test</ListItem>
        </Appear>
        <Appear>
          <ListItem>A look into some data</ListItem>
        </Appear>
        <Appear>
          <ListItem>Tracking a user's behavior</ListItem>
        </Appear>
      </ListSlide>
    </Slide>
  );
}

export function WebPowers() {
  return (
    <Slide>
      <ListSlide title="Strengths of the web">
        <Appear>
          <ListItem>You don't have to install websites</ListItem>
        </Appear>
        <Appear>
          <ListItem>Sharing tools and code has never been easier</ListItem>
        </Appear>
        <Appear>
          <ListItem>Take this presentation as an example</ListItem>
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
  "devDependencies": {
    "raw-loader": "^0.5.1",
    "surge": "1.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "yarn build && surge ./build -d react-days-workshop.surge.sh",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
}      
      `}
      ranges={[
        { loc: [2, 5] },
        { loc: [5, 14] },
        { loc: [8, 12] },
        { loc: [21, 22], note: 'What is this Surge package?' },
        { loc: [16, 17] },
      ]}
    />
  );
}

export function Surge() {
  return (
    <Slide>
      <Heading size={5} margin={'0 0 40px 0'} textColor="primaryText">
        Deploying your own version
      </Heading>
      <Terminal
        title="react-days-workshop"
        output={[
          <User>yarn add surge --dev</User>,
          `yarn add v1.5.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages... 
[3/4] 🔗  Linking dependencies...
✨  Done in 0.73s.
`,
          <User>yarn deploy</User>,
          `The build folder is ready to be deployed.
You may serve it with a static server:

Welcome to Surge! (surge.sh)
   Login (or create surge account) by entering email & password.

          email: 
`,
          `
          password: 
          `,
          `
   Running as niekkruse70@gmail.com (Student)

        project: ./build
         domain: react-days-workshop.surge.sh
         upload: [] 100% eta: 0.0s (13 files, 10720195 bytes)
            CDN: [====================] 100%
             IP: 45.55.110.124
 p
   Success! - Published to react-days-workshop.surge.sh`,
        ]}
      />
    </Slide>
  );
}
