import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { trackEvent } from 'utils/events';
import SurpriseOverlay from './SurpriseOverlay';

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
  static contextTypes = {
    store: PropTypes.shape({
      getState: PropTypes.func,
    }),
  };

  state = {
    isSurprised: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  hideSurprise = () => {
    this.setState({ isSurprised: false });
  };

  onClick = () => {
    this.setState(
      {
        isSurprised: true,
      },
      () => {
        const { store } = this.context;
        const state = store.getState();

        trackEvent('Surprise Button Clicked Live', {
          slideNumber: state.route.slide,
        });

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
