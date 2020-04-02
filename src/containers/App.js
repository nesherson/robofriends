import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ robots: data });
      });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className='main'>
        <h1 className='header'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
