import React, { Component } from 'react';

import HeroHeader from './hero-header';
import HeroAdd from './hero-add';
import HeroList from './hero-list';

export default class HeroApp extends Component {
  render() {
    return (
      <div>
        <HeroHeader />
        <HeroAdd />
        <HeroList />
      </div>
    );
  }
}
