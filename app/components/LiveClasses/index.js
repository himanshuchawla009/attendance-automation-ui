/**
 *
 * LiveClasses
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import '../../Styles/student.scss';
import { Divider } from 'semantic-ui-react';

import CustomButton from '../CustomButton';
function LiveClasses(props) {
  return (

    <div className="student-students-card" >

      <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Classes</h2>

      <Divider />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', cursor: 'pointer' }}>
        <p style={{ fontSize: "20px" }}>Science</p>
        <p>Started</p>
        <CustomButton text="JOIN" onClick={props.handleJoin}/>

      </div>
      <Divider />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', cursor: 'pointer' }}>
        <p style={{ fontSize: "20px" }}>Maths</p>
        <p>3:30 pm</p>
        <CustomButton text="JOIN" disabled />
      </div>
      <Divider />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', cursor: 'pointer' }}>
        <p style={{ fontSize: "20px" }}>Science</p>
        <p>2:00 pm</p>
        <CustomButton text="JOIN" disabled/>
      </div>
      <Divider />

    </div>
  );
}

LiveClasses.propTypes = {};

export default memo(LiveClasses);
