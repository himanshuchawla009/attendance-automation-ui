/**
 *
 * Table
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import DataTable, { createTheme } from 'react-data-table-component';
createTheme('solarized', {

  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});





function Table(props) {
  return (
    <div>

<DataTable
   pagination
    style={{cursor:'pointer'}}
    title={props.heading}
    theme="solarized"
    columns={props.columns}
    data={props.data}
    selectableRows // add for checkbox selection
    Clicked
    // Selected={handleChange}
    onRowClicked={props.onClick}
  />     
    </div>
  );
}

Table.propTypes = {};

export default Table;
