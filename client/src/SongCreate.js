import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

import songQuery from '../queries/fetchSongs';

/*
1. use mutation to create new data
2. refetch the data in the promise chain
3. cold/warm cache

*/
class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    //the syntax to connect the mutation variables with component states
    this.props
      .mutate({
        //this is the configuration object pre-set by graphQL mutation
        //refetch the query after mutate the variables
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query: songQuery }], //the value pass in
      })
      .then(() => hashHistory.push('/'));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title: </label>
          <input
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

//because the mutation is defined outside of the component, we cannot use the this.state into the mutation helper function
//thus, we will have to leverage the Query Variables sytax from GraphQL
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
