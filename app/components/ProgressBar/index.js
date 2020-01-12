/**
 *
 * ProgressBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button, Progress } from 'semantic-ui-react'


function ProgressBar(props) {
  return (
    <div>
      <Progress percent={props.percent} indicating > {props.text} </Progress>
    </div>
  );
}

ProgressBar.propTypes = {};

export default ProgressBar;
