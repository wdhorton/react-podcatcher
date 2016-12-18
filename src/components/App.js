import React, { Component } from 'react';
import PodcastList from './PodcastList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '', podcasts: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
    fetch(`http://localhost:3051/api/itunes_search?query=${encodeURIComponent(e.target.value)}`)
      .then(res => res.json())
      .then(body => this.setState({ podcasts: body.results }));
  }

  render() {
    return (
      <div className={styles.app}>
        <input type="text" value={this.state.query} onChange={this.handleChange} />
        <PodcastList podcasts={this.state.podcasts} />
      </div>
    )
  }
}

export default App;
