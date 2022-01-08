import React, { Component } from 'react';
import { graphql } from 'react-apollo'; //the helper to bond the query to client side
import { Link } from 'react-router';
import gql from 'graphql-tag';
import fetchSong from '../queries/fetchSong';

import CreateLyric from './CreateLyric';
class SongDetail extends Component {
  render() {
    console.log('song details data', this.props.data);
    const { song } = this.props.data;
    console.log('song', song);
    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <CreateLyric songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail); //query the params from url and pass the data
