import React from 'react';
import ReactDOM from 'react-dom';
//apollo communicate with BE
import ApolloClient from 'apollo-client'; 
//apollo customized for react, which provides the data for client side
import { ApolloProvider } from 'react-apollo'; 

import SongList from './src/SongList';

const client = new ApolloClient({}); //initiate empty store

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>)
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
