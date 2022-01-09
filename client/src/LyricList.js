import React, { Component } from 'react';
// import { graphql } from 'react-apollo';

class LyricList extends Component {
  renderLyrics() {
    return this.props.lyrics.map(({ content, id }) => (
      <li className="collection-item" key={id}>
        {content}
      </li>
    ));
  }

  render() {
    return <ul className="colletion">{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
