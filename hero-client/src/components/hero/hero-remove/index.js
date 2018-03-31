import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import RaisedButton from 'material-ui/RaisedButton';

import { GET_HEROES, REMOVE_HERO } from '../schema';

export default class HeroRemove extends Component {
  render() {
    const { id } = this.props;

    const removeHeroArg = {
      variables: { id },
      refetchQueries: [{ query: GET_HEROES }]
    };

    return (
      <Mutation mutation={ REMOVE_HERO }>
        {removeHero => (
          <RaisedButton
            label="Remove Hero"
            secondary={ true }
            onClick={() => removeHero(removeHeroArg)}
          />
        )}
      </Mutation>
    );
  }
}
