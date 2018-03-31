import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

export default class HeroListWrapper extends Component {
  render() {
    const { headers, children } = this.props;

    return (
      <Table>
        <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
          <TableRow>
            { headers.map(header => <TableHeaderColumn key={ header }>{ header }</TableHeaderColumn>) }
          </TableRow>
        </TableHeader>
        <TableBody>
          { children }
        </TableBody>
      </Table>
    );
  }
}
