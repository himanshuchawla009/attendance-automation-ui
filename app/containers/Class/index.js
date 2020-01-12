/**
 *
 * Class
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectClass from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ClassDetails from 'components/ClassDetails'
import TopBar from 'components/TopBar';

export function Class() {
  useInjectReducer({ key: 'class', reducer });
  useInjectSaga({ key: 'class', saga });

  return (
    <div>
      <Helmet>
        <title>Class</title>
        <meta name="description" content="Description of Class" />
      </Helmet>
      <TopBar handleLogout ={()=> { props.history.push('/')}} />

      <h2 style={{textAlign:'center', marginTop:10}}>Classroom</h2>
      <ClassDetails/>
    </div>
  );
}

Class.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  class: makeSelectClass(),
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

export default compose(
  withConnect,
  memo,
)(Class);
