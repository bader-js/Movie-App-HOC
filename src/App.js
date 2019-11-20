import React, { Component } from 'react';
import './App.css';
import MovieContainer from './components/movieContainer.js';
import WithLoading from './components/WithLoading'
const Loading = Component => {
  return ({ isLoading }) => {
    if (!isLoading) return <Component />;
    return <div className="loader spinner-border text-success" />;
  };
};
const Content = Loading(MovieContainer);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }),2000);
  }
  render() {
    return (
      <div className="App ">
        <Content isLoading={this.state.loading} />
      </div>
    );
  }
}


export default WithLoading(App);
