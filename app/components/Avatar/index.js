/**
 *
 * Avatar
 *
 */

import React from 'react';
import Avatar  from 'react-avatar';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Avatarr(props) {
  return (
    <div>
      <Avatar name={props.name} size={props.size} />
        </div>
  );
}

Avatarr.propTypes = {};

export default Avatarr;
