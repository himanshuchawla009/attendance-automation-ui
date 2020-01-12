/**
 *
 * StudentDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStudentDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import LiveClasses from '../../components/LiveClasses';
import StudentDetail from 'components/StudentDetail';
import TopBar from 'components/TopBar';


export function StudentDetails() {
  useInjectReducer({ key: 'studentDetails', reducer });
  useInjectSaga({ key: 'studentDetails', saga });

  return (
    <div>
      <Helmet>
        <title>StudentDetails</title>
        <meta name="description" content="Description of StudentDetails" />
      </Helmet>
      <TopBar handleLogout ={()=> { props.history.push('/')}} />

      <StudentDetail />

    </div>
  );
}

StudentDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  studentDetails: makeSelectStudentDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(StudentDetails);
