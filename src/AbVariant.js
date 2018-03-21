import React from 'react';
import PropTypes from 'prop-types';

function assignVariant(testName, variants) {
  const storedVariant = localStorage.getItem(`ab-tests-${testName}`);
  if (storedVariant) {
    return storedVariant;
  }

  const assignedVariant = variants[Math.floor(Math.random() * variants.length)];

  localStorage.setItem(`ab-tests-${testName}`, assignedVariant);

  return assignedVariant;
}

class AbVariant extends React.Component {
  static propTypes = {
    testName: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.func,
  };

  constructor(props) {
    super(props);

    const { testName, variants } = this.props;
    this.assignedVariant = assignVariant(testName, variants);
  }

  render() {
    return this.props.children(this.assignedVariant);
  }
}

export default AbVariant;
