/**
 *
 * CircleStatus
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CircleStatus(props) {
  return (
    <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:10}}>
      <div style={{ borderRadius: '50%', backgroundColor: 'green', height: 40, width: 40, display:'flex', justifyContent:'center',alignItems:'center' }}>
         <p style={{alignSelf:'center', fontSize:15, color:'#fff'}}>{props.data}</p>

      </div>
      <p style={{marginLeft:1, fontSize:10}}>{props.text}</p>
    </div>
  );
}

CircleStatus.propTypes = {};

export default CircleStatus;
