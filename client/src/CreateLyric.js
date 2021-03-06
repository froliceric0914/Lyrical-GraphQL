import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import adddLyricToSongMution from '../mutations/addLyricToSong';

/*
keys feature:
1. use mutation on form submit
2. use the mutate method, which return to a promise
3. making a mutation function and pass the variables
*/
class CreateLyric extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          songId: this.props.songId,
          content: this.state.content,
        },
      })
      .then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div>{this.props.content}</div>
        <label>Add Lyric</label>

        <input
          value={this.state.content}
          onChange={(e) => this.setState({ content: e.target.value })}
        />
      </form>
    );
  }
}

// const mutation = gql`
//   mutation AddLyricToSong($songId: ID!, $content: String) {
//     addLyricToSong(songId: $songId, content: $content) {
//       id
//       lyrics {
//         id
//         content
//         likes
//       }
//     }
//   }
// `;

export default graphql(adddLyricToSongMution)(CreateLyric);
