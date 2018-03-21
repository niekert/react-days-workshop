import React from 'react';
import doggoSurpriseSrc from 'img/doggo_surprise.gif';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import preloadImage from 'utils/preloadImage';

preloadImage(doggoSurpriseSrc);

const Wrapper = styled.div`
  display: flex;
  pointer-events: none;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  position: fixed;
  z-index: 10000;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 250ms ease-out;
`;

export default function SurpriseOverlay({ isVisible }) {
  return ReactDOM.createPortal(
    <Wrapper isVisible={isVisible}>
      {isVisible && <img src={doggoSurpriseSrc} alt="Surprise" />}
    </Wrapper>,
    document.getElementById('surprise-container'),
  );
}
