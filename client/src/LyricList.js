import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
  onLike(songId) {
    this.props.mutate({ variables: { songId } });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li className="collection-item" key={id}>
        {content}
        <div className="vote-box>">
          <i className="material-icons" onClick={() => this.onLike(id)}>
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyrics($songId: ID!) {
    likeLyric(id: $songId) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
