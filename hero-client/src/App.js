import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { client } from './graphql';
import HeroApp from './components/hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <MuiThemeProvider>
          <HeroApp />
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
