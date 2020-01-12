/**
 *
 * IconWithBorder
 *
 */

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Icon } from 'semantic-ui-react'


function IconWithBorder(props) {
 
  return (
    <div style={{ height: props.height, width: props.width, borderStyle: "solid", borderWidth: "3px", borderColor: !!props.disabled ? '#9ea1a9':'#12d06b', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' ,cursor:'pointer'}} onClick={props.handleRoleToggle}>
      <Icon disabled={props.disabled} name={props.iconName}  size='huge'  />
      <h4>{props.subText}</h4>
    </div>
  );
}

IconWithBorder.propTypes = {};

export default IconWithBorder;
