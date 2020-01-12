/**
 *
 * StudentCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Avatar from '../Avatar';
import CircleStatus from '../CircleStatus';
import ProgressBar from '../ProgressBar';
import CustomButton from '../CustomButton';
function StudentCard(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        color: props.selected ? '#fff' : '#000',
        backgroundColor: props.selected ? '#273eac' : '#fff',
        cursor: 'pointer',
        display: 'flex', flexDirection: 'column',
        height: 350, width: 280, borderRadius: '5%', 
        boxShadow: "0px 8px 60px -10px rgba(13,28,39,0.6)", margin: 10
      }}>
      <div style={{
        marginTop: 30,
        display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'
      }}>
        <Avatar name="Summer" size="50" />
        <p style={{ fontSize: '15px', color: props.selected ? '#fff' : '#000' }} >{props.data.name}</p>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <CircleStatus data={props.data.classes}  text="classes"/>
        <CircleStatus data={props.data.students}  text="students"/>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start'
      }}>
        <p style={{ fontSize: '15px' }}>Start Date:</p>
        <p style={{ fontSize: '15px' }}>{props.data.startDate}</p>

      </div>
      <div style={{
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start'
      }}>
        <p style={{ fontSize: '15px' }}>End Date:</p>
        <p style={{ fontSize: '15px' }}>{props.data.endDate}</p>

      </div>
      <ProgressBar percent={props.data.progress} text="Batch Progress" />
      <CustomButton text="More Details" style={{ marginTop: 10, alignSelf:'center' }} />
    </div>
  );
}

StudentCard.propTypes = {};

export default StudentCard;
