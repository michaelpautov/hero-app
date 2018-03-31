import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import HeroRemove from '../hero-remove';
import './index.css';

export default class HeroActions extends Component {
  editButtons() {
    const { mutationMethod, save, cancel } = this.props;

    return (
      <div>
        <RaisedButton
          label="Cancel"
          onClick={ cancel } />
        <RaisedButton
          className="button"
          onClick={() => save(mutationMethod) }
          type="submit"
          primary={ true }
          label="Save" />
      </div>
    );
  }

  render() {
    const { id, edit, isEditMode } = this.props;
    if (isEditMode) {
      return this.editButtons();
    }
    return (
      <div>
        <RaisedButton
          className="mr10"
          label="Edit"
          onClick={ edit } />
        <HeroRemove id={ id } />
      </div>
    );
  }
}
