import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Text = styled.div``;

export default function SurpriseOverlay() {
  return (
    <Wrapper>
      <Text>HALLO SURPRISE</Text>
    </Wrapper>
  );
}
