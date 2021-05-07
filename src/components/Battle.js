import React from 'react';
import Instructions from './Instructions';
import Players from './Players';

class Battle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Instructions />
        <Players />
      </>
    );
  }
}

export default Battle;
