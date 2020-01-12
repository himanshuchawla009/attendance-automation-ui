/**
 *
 * StudentClassroom
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';
import ClassDetails from 'components/ClassDetails'
import TopBar from 'components/TopBar';

export function StudentClassroom(props) {
  return (
    <div>
            <TopBar handleLogout ={()=> { props.history.push('/')}} />

      <h2 style={{ textAlign: 'center', marginTop: 10 }}>Classroom</h2>

      <ClassDetails type="student" />
    </div>
  );
}

StudentClassroom.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StudentClassroom);
