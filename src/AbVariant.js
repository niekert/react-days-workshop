import React from 'react';
import PropTypes from 'prop-types';

function assignVariant(name, variants) {
  const storedVariant = localStorage.getItem(`ab-test-${name}`);
  if (storedVariant) {
    return storedVariant;
  }

  // Get a random value from the array
  const assignedVariant = variants[Math.floor(Math.random() * variants.length)];

  localStorage.setItem(`ab-test-${name}`, assignedVariant);

  return assignedVariant;
}

class AbVariant extends React.Component {
  static propTypes = {
    testName: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.func,
  };

  constructor(props) {
    super(props);

    const { testName, variants } = props;
    this.assignedVariant = assignVariant(testName, variants);
  }

  render() {
    return this.props.children(this.assignedVariant);
  }
}

export default AbVariant;
