import React from 'react';
import SurpriseOverlay from './SurpriseOverlay';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  bottom: 0;
  border: none;
  right: 15px;
  background: ${props => props.theme.colors.cta};
  color: ${props => props.theme.colors.ctaText};
  font-size: 25px;
  outline: none;
  padding: 3px 5px;
  cursor: pointer;
  border-radius: 10px;
`;

class SurpriseButton extends React.Component {
  state = {
    isSurprised: false,
  };

  onClick = () => {
    alert('surprised');
  };

  render() {
    const { isSurprised } = this.state;

    return (
      <React.Fragment>
        <StyledButton onClick={this.onClick}>Surprise me!</StyledButton>;
        {isSurprised && <SurpriseOverlay />}
      </React.Fragment>
    );
  }
}

export default SurpriseButton;
