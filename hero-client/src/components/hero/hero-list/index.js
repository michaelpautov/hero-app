import React, { Component } from 'react';
import { Query } from 'react-apollo';

import HeroListWrapper from '../hero-list-wrapper';
import HeroItem from '../hero-item';
import { GET_HEROES } from '../schema';

export default class HeroList extends Component {
  render() {
    const headers = ['name', 'ability', 'actions'];

    return (
      <Query query={ GET_HEROES }>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          if (data && data.heroes && data.heroes.length) {
            return (
              <HeroListWrapper headers={ headers }>
                { data.heroes.map(hero => <HeroItem key={ hero.id } { ...hero } />)}
              </HeroListWrapper>
            );
          }
          return <p>Empty results</p>;
        }}
      </Query>
    );
  }
}
