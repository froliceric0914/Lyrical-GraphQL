import React from 'react';
import ReactDOM from 'react-dom';
//apollo communicate with BE
import ApolloClient from 'apollo-client'; 
//apollo customized for react, which provides the data for client side
import { ApolloProvider } from 'react-apollo'; 
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from "./src/App"
import SongList from './src/SongList';
import SongCreate from './src/SongCreate';

const client = new ApolloClient({}); //initiate empty store

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="song/new" component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>)
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
