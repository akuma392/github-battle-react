import React from 'react';

class Github extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   date: null,
    // };

    // if (this.props.state.elm) {
    //   let elm = this.props.state.elm;
    //   fetch(
    //     `https://api.github.com/search/repositories?q=stars:%3E1+language:${elm}&sort=stars&order=desc&type=Repositories`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => this.setState({ data: data }));
    // }
  }

  // componentDidMount() {
  //   let elm = this.props.state.elm;
  //   if (!elm) {
  //     console.log('all');
  //     fetch(
  //       `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => this.setState({ data: data }));
  //   } else {
  //     console.log('element');
  //     fetch(
  //       `https://api.github.com/search/repositories?q=stars:%3E1+language:${elm}&sort=stars&order=desc&type=Repositories`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => this.setState({ data: data }));
  //   }
  // }

  render() {
    console.log(this.props.state.elm, 'element');
    if (!this.props.state.data) {
      return <h3 className="text-2xl text-center">Loading....</h3>;
    }
    return (
      <ul className="grid grid-cols-4 gap-4 rootElm">
        {this.props.state.data.items.map((elm, i) => {
          return (
            <li className="card" key={i}>
              <p className="text-center text-3xl text-red-900 my-5">#{i + 1}</p>
              <img className="w-32" src={elm.owner.avatar_url} alt="" />
              <a href={elm.owner.html_url}>
                <h2 className="font-bold text-red-400 my-5">{elm.name}</h2>
              </a>

              <p className="text-lg mb-3">
                <i className="fas fa-user-friends mr-4 text-yellow-800"></i>{' '}
                {elm.owner.login}
              </p>
              <p className="text-lg mb-3">
                <i className="fas fa-star mr-4 text-yellow-500"></i>
                {elm.watchers_count} stars
              </p>
              <p className="text-lg mb-3">
                <i className="fas fa-code-branch mr-4 text-blue-400"></i>
                {elm.forks} forks
              </p>
              <p className="text-lg mb-3">
                <i class="fas fa-sensor-alert mr-4"></i>
                {elm.open_issues} open isues
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Github;
