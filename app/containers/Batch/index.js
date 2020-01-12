/**
 *
 * Batch
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
import makeSelectBatch from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Batch() {
  useInjectReducer({ key: 'batch', reducer });
  useInjectSaga({ key: 'batch', saga });

  return (
    <div>
      <Helmet>
        <title>Batch</title>
        <meta name="description" content="Description of Batch" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Batch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  batch: makeSelectBatch(),
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
)(Batch);
