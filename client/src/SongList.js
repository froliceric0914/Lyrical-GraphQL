import React, { Component } from 'react';
import { graphql } from 'react-apollo'; //the helper to bond the query to client side
import { Link } from 'react-router';
import gql from 'graphql-tag';
import songQuery from '../queries/fetchSongs';
/*
key features:
1. graphql as a glue to bond the data defined/formed from BE to FE
2. use double HOF: 
  2.1 mutation
  2.2 IIF the graphql query
3. refresh the data after calling mutation

*/
//data required is the song titles
class SongList extends Component {
  //we are not using the refetchQueries: [ { query } ] here
  // because the data is associated with this component
  onSongDelete(id) {
    this.props
      .mutate({
        variables: { id },
      })
      .then(() => this.props.data.refetch());
  }

  render() {
    //gql will first send the request and then component will be re-rendered when the data comes back
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">
          {this.props.data.songs.map((song) => (
            <li key={song.id} className="collection-item">
              <Link to={`songs/${song.id}`}>{song.title}</Link>
              <i
                className="material-icons"
                onClick={() => this.onSongDelete(song.id)}
              >
                delete
              </i>
            </li>
          ))}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

//ID is another type of graphQL data type
const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

//graphql as a glue to bond the data defined/formed from be to fe
export default graphql(mutation)(graphql(songQuery)(SongList));
