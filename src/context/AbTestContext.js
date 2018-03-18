import React, { createContext } from 'react';
import { getAssignedVariants, storeAssignedVariant } from 'utils/abTests';

const AbContext = createContext();

export class Provider extends React.Component {
  state = {
    assignedVariants: getAssignedVariants(),
  };

  assignVariant = (testName, variants) => {
    const assignedVariant =
      variants[Math.floor(Math.random() * variants.length)];

    storeAssignedVariant(testName, assignedVariant);

    this.setState({
      [testName]: assignedVariant,
    });
  };

  render() {
    const { assignedVariants } = this.state;

    return (
      <AbContext.Provider
        value={{ assignedVariants, assignVariant: this.assignVariant }}
      >
        {this.props.children}
      </AbContext.Provider>
    );
  }
}

export const Consumer = AbContext.Consumer;
