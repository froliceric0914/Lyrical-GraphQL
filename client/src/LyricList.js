import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        /*
        set the expected res, which is like a Guess, to improve the UI upadte time
        this should be identical to the mutation name and its result, 
        but dynamically update the params
        */
        likeLyrics: {
          id,
          likes: likes + 1,
          __typename: 'LyricType',
        },
      },
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => (
      /* {id, content, likes} is destrucured from the inside fetchSong object:
      query SongQuery($id: ID!) {
        song(id: $id) {
          id
          title
          lyrics {
            id
            content
            likes
          }
        }
      }
      */
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
  mutation LikeLyrics($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
