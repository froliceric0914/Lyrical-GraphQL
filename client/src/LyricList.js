import React, { Component } from 'react';
// import { graphql } from 'react-apollo';

class LyricList extends Component {
  renderLyrics() {
    return this.props.lyrics.map(({ content, id }) => (
      <li key={id}>{content}</li>
    ));
  }

  render() {
    return <ul> d LyricList</ul>;
  }
}

export default LyricList;
