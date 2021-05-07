import React from 'react';
import Language from './Language';
import { Route } from 'react-router-dom';
import Github from './Github';
class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elm: null,
      data: null,
    };
  }
  handleClick = (elm) => {
    console.log(elm);
    // this.setState({ elm: elm });
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${elm}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data, elm: elm }));
  };
  componentDidMount() {
    if (!this.state.data) {
      fetch(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ data: data }));
    }
    // } else {
    //   fetch(
    //     `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.elm}&sort=stars&order=desc&type=Repositories`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => this.setState({ data: data }));
    // }
  }

  render() {
    return (
      <>
        <Language handleClick={this.handleClick} state={this.state} />
        <Github state={this.state} />
      </>
    );
  }
}

export default Popular;
