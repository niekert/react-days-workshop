import React, { createContext } from 'react';
import { getAssignedVariants, storeAssignedVariant } from 'utils/abTests';

const AbContext = createContext();

export class Provider extends React.Component {
  state = getAssignedVariants()

  assignVariant = (testName, variants) => {
    const assignedVariant =
      variants[Math.floor(Math.random() * variants.length)];

    storeAssignedVariant(testName, assignedVariant);

    this.setState({
      [testName]: assignedVariant,
    });
  };

  render() {
    return (
      <AbContext.Provider
        value={{ assignedVariants: this.state, assignVariant: this.assignVariant }}
      >
        {this.props.children}
      </AbContext.Provider>
    );
  }
}

export const Consumer = AbContext.Consumer;

export const withAbContext = (ComposedComponent) => props =>
  <AbContext.Consumer>
    {contextProps => (
      <ComposedComponent {...contextProps} {...props} />
    )}
  </AbContext.Consumer>