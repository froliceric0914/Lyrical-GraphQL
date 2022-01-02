import React, { Component} from 'react';
import gql from 'graphql-tag' //data query helper
import { graphql } from 'react-apollo' //the helper to bond the query to client side

//data required is the song titles
class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    })
  }

  render() {
    //gql will first send the request and then component will be re-rendered when the data comes back
    if (this.props.data.loading) { return <div>Loading...</div>}
    console.log(this.props)
    return (
      <ul className="collection">
        {this.renderSongs()}
      </ul>
    ); 
  }   
}

//use template string and gql helper to form the query data to be executed
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

//graphql as a glue to bond the data defined/formed from be to fe
export default graphql(query)(SongList);