/**
 *
 * CustomButton
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button , Icon} from 'semantic-ui-react';

function CustomButton(props) {

  return (<Button disabled={props.disabled} inverted color="green" style={{ ...props.style }} onClick={props.onClick}>{props.text}
    {props.icon && <Icon disabled={props.disabled} name={props.iconName} style={{marginLeft:5}}/>
}
  </Button>);
}

CustomButton.propTypes = {};

export default CustomButton;
