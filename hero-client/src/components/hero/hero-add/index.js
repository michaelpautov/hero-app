import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { GET_HEROES, ADD_HERO } from '../schema';
import './index.css';

export default class HeroAdd extends Component {
  componentWillMount() {
    this.initState();
  }

  initState() {
    this.setState({ name: '', ability: '' });
  }

  onFieldChange(evt) {
    const { name, value } = evt.target;
    this.setState(
      Object.assign(
        this.state,
        { [name]: value }
      )
    );
  }

  onClick(cb) {
    const { name, ability } = this.state;
    const variables = { name, ability };
    const refetchQueries = [{ query: GET_HEROES }];
    cb({ variables, refetchQueries });
    this.initState();
  }

  render() {
    const { name, ability } = this.state;

    return (
      <Mutation mutation={ ADD_HERO }>
        {addHero => (
          <div>
            <form className="create-form">
              <div className="row name-row">
                <TextField
                  name="name"
                  floatingLabelText="name"
                  value={ name }
                  onChange={evt => this.onFieldChange(evt)}
                  required />
              </div>
              <div className="row ability-row">
                <TextField
                  name="ability"
                  floatingLabelText="ability"
                  value={ ability }
                  onChange={evt => this.onFieldChange(evt)}
                  required />
              </div>
              <div className="row button-row">
                <RaisedButton
                  onClick={() => this.onClick(addHero)}
                  label="Create Hero"
                  primary={ true }/>
              </div>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
