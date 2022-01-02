import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from "graphql-tag";

class SongCreate extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props)
    //the syntax to connect the mutation variables with component states
    this.props.mutate({
      //this is the configuration object pre-set by graphQL mutation
      variables: {
        title: this.state.title
      }
    });
  }


  render (){
    return (
      <div>
        <h1>Create a New Song</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title: </label>
          <input 
            onChange={e=>{this.setState({ title: e.target.value })}} 
            value={this.state.title} 
          />
          <button>+</button>
        </form>
      </div>
    )
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

export default graphql(mutation)(SongCreate)