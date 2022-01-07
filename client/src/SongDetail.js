import React, { Component} from 'react';
import { graphql } from 'react-apollo' //the helper to bond the query to client side
import { Link } from 'react-router'
import gql from "graphql-tag"
import fetchSong from "../queries/fetchSong"

class SongDetail extends Component {

  render () {
    console.log("props", this.props)
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id}}}
})(SongDetail) //query the params from url and pass the data