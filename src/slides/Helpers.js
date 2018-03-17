import React, { Fragment } from 'react';
import { Image, Layout, Slide, Heading, List } from 'spectacle';
import styled from 'styled-components';

const StyledList = styled(List)`
  && {
    list-style-position: outside;
    flex: 1;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

export function imageSlide({ src, transition, width, height }) {
  return (
    <Slide transition={transition}>
      <Layout fit>
        <StyledImage src={src} width={width} height={height} />
      </Layout>
    </Slide>
  );
}

export function ListSlide({ title, listItems, children, ...props }) {
  return (
    <Fragment>
      <Heading
        textAlign="left"
        size={4}
        margin="0 0 20px 0"
        textColor="primaryText"
      >
        {title}
      </Heading>
      <StyledList>{children}</StyledList>
    </Fragment>
  );
}
