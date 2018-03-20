import React from 'react';
import PropTypes from 'prop-types';
import { withAbContext } from './context/AbTestContext';

class AbVariant extends React.Component {
  static propTypes = {
    testName: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.func,
  };

  getAssignedVariant () {
    const { assignedVariants, testName} = this.props;
    return assignedVariants[testName];
  }
  
  componentDidMount() {
    if (!this.getAssignedVariant()) {
      return this.props.assignVariant(this.props.testName, this.props.variants);
    }
  }

  render() {
    const assignedVariant = this.getAssignedVariant();

    return this.props.children(assignedVariant);
  }
}

export default withAbContext(AbVariant);