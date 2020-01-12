/**
 *
 * Cell
 *
 */

import React from 'react';
import { Segment } from 'semantic-ui-react';

import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Cell(props) {
  return <div style={{ "height": props.height, "width": props.width, backgroundColor:'#fff',...props.style }}>{props.children}</div>
}

Cell.propTypes = {
  children: PropTypes.shape,
};

export default Cell;
