import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import TextField from 'material-ui/TextField';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import HeroActions from '../hero-actions';
import { EDIT_HERO } from '../schema';
import './index.css';

export default class HeroItem extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentWillMount() {
    this.initState();
  }

  initState() {
    this.setState({
      isEditMode: false,
      id: this.props.id || '',
      name: this.props.name || '',
      ability: this.props.ability || ''
    });
  }

  update(evt) {
    const { name, value } = evt.target;
    this.setState(
      Object.assign(
        this.state,
        { [name]: value }
      )
    );
  }

  getElementByMode(field, name) {
    return this.state.isEditMode
      ? <TextField
        name={ name }
        hintText={ field }
        value={ field }
        onChange={evt => this.update(evt)}
        required />
      : <div>{ field }</div>;
  }

  save(cb) {
    const { id, name, ability } = this.state;
    const variables = { id, name, ability };
    cb({ variables });
    this.edit();
  }

  cancel() {
    this.initState();
  }

  edit() {
    this.setState(
      Object.assign(this.state, { isEditMode: !this.state.isEditMode })
    );
  }

  render() {
    const { id, name, ability, isEditMode } = this.state;

    return (
      <Mutation mutation={ EDIT_HERO }>
        {editHero => (
          <TableRow>
            <TableRowColumn>
              { this.getElementByMode(name, 'name') }
            </TableRowColumn>
            <TableRowColumn>
              { this.getElementByMode(ability, 'ability') }
            </TableRowColumn>
            <TableRowColumn>
              <HeroActions
                id={ id }
                isEditMode={ isEditMode }
                mutationMethod={ editHero }
                cancel={ this.cancel }
                edit={ this.edit }
                save={ this.save }
              />
            </TableRowColumn>
          </TableRow>
        )}
      </Mutation>
    );
  }
}
