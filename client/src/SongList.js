import React, { Component} from 'react';
import { graphql } from 'react-apollo' //the helper to bond the query to client side
import { Link } from 'react-router'
import gql from "graphql-tag"
import query from "../queries/fetchSongs"
//data required is the song titles
class SongList extends Component {

  //we are not using the refetchQueries: [ { query } ] here
  // because the data is associated with this component
  onSongDelete( id ) {
    this.props.mutate({
      variables: { id }  
    }).then(() => this.props.data.refetch())
  }

  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
          <i className="material-icons" onClick={()=>this.onSongDelete(song.id)}>delete</i>
        </li>
      )
    })
  }

  render() {
    //gql will first send the request and then component will be re-rendered when the data comes back
    if (this.props.data.loading) { return <div>Loading...</div>}
    console.log(this.props)
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className='material-icons'>add</i>
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
`



//graphql as a glue to bond the data defined/formed from be to fe
export default graphql(mutation)(
  graphql(query)(SongList)
);