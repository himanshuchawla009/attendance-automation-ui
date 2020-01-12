/**
 *
 * TopBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Input, Menu, Icon } from 'semantic-ui-react'
import CustomButton from '../CustomButton';

function TopBar(props) {
  return (
    <Menu>
      <Menu.Item>
        <Input className='icon' icon='search' placeholder='Search...' />
      </Menu.Item>

      <Menu.Item position='right'>
        <CustomButton text="logout" style={{marginRight:"20px"}} onClick = {()=>props.handleLogout()}/>
         <Icon name="bell"/>
      </Menu.Item>
      
    </Menu>
  );
}

TopBar.propTypes = {};

export default TopBar;
