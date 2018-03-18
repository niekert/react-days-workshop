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

  hideSurprise = () => {
    this.setState({ isSurprised: false });
  };

  onClick = () => {
    this.setState(
      {
        isSurprised: true,
      },
      () => {
        this.timeout = setTimeout(this.hideSurprise, 2700);
      },
    );
  };

  render() {
    const { isSurprised } = this.state;

    return (
      <React.Fragment>
        <StyledButton onClick={this.onClick}>Surprise me!</StyledButton>
        <SurpriseOverlay isVisible={isSurprised} />
      </React.Fragment>
    );
  }
}

export default SurpriseButton;
