import React from 'react';
import Avatar1 from './Avatar1';
import Avatar2 from './Avatar2';

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: null,
      two: null,
      dataOne: null,
      dataTwo: null,
    };
  }

  handleOne = (event) => {
    event.preventDefault();

    console.log(this.state);

    fetch(`https://api.github.com/users/${this.state.one}`)
      .then((res) => res.json())
      .then((data) => this.setState({ dataOne: data }));
  };

  handleInput1 = (event) => {
    this.setState({
      one: event.target.value,
    });
  };
  handleTwo = (event) => {
    event.preventDefault();

    console.log(this.state);

    fetch(`https://api.github.com/users/${this.state.two}`)
      .then((res) => res.json())
      .then((data) => this.setState({ dataOne: data }));
  };

  handleInput2 = (event) => {
    this.setState({
      two: event.target.value,
    });
  };

  handleCancel = () => {
    this.setState({
      dataOne: null,
    });
  };
  handleCancel2 = () => {
    this.setState({
      dataTwo: null,
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <h2 className="text-2xl font-bold my-8 text-center">Players</h2>

        <div className="flex justify-center">
          {this.state.dataOne ? (
            <Avatar1 />
          ) : (
            <One handleOne={this.handleOne} handleInput1={this.handleInput1} />
          )}
          {this.state.dataTwo ? (
            <Avatar2 />
          ) : (
            <Two handleTwo={this.handleTwo} handleInput2={this.handleInput2} />
          )}
        </div>

        {this.state.dataOne && this.state.dataTwo ? (
          <button>Battle</button>
        ) : (
          ''
        )}
      </>
    );
  }
}

function One(props) {
  return (
    <form className="mr-12" onSubmit={props.handleOne}>
      <p className="my-5">Player One</p>
      <input
        className="mx-8 p-2"
        type="text"
        placeholder="github username of player one"
        onChange={props.handleInput1}
      />
      <button>Submit</button>
    </form>
  );
}

function Two(props) {
  return (
    <form onSubmit={props.handleTwo}>
      <p className="my-5">Player two</p>
      <input
        className="mx-8 p-2"
        type="text"
        placeholder="github username of player two"
        onChange={props.handleInput2}
      />
      <button>Submit</button>
    </form>
  );
}

export default Players;
