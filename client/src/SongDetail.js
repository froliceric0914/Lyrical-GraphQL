import React, { Component } from 'react';
import { graphql } from 'react-apollo'; //the helper to bond the query to client side
import { Link } from 'react-router';
import gql from 'graphql-tag';
import fetchSong from '../queries/fetchSong';

import LyricList from './LyricList';
import CreateLyric from './CreateLyric';

/*
keys usage at this page:
1. use graphql to grasp the prama from the url path

*/
class SongDetail extends Component {
  render() {
    console.log('song details data', this.props.data);
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
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
