import React from 'react';
import PropTypes from 'prop-types';
import { Consumer as AbContextConsumer } from './context/AbTestContext';

class AbVariant extends React.Component {
  static propTypes = {
    testName: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.func,
  };

  render() {
    const { testName } = this.props;
    return (
      <AbContextConsumer>
        {({ assignedVariants }) => {
          const assignedVariant = assignedVariants[testName];
          return this.props.children(assignedVariant);
        }}
      </AbContextConsumer>
    );
  }
}

export default AbVariant;
