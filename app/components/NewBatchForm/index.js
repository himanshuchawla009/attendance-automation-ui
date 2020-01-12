/**
 *
 * NewBatchForm
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Form } from 'semantic-ui-react';
import CustomButton from '../CustomButton'

function NewBatchForm() {
  return (
    <Form style={{ marginTop: 10 }} size="large" style={{ width: "100%" }}>
      <Form.Field>
        <label>Batch Name</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Start Date</label>
        <input type="date" />
      </Form.Field>
      <CustomButton style={{ marginTop: "10px" }} text="CREATE" onClick={() => props.handleBatchStart()} />

    </Form>

  );
}

NewBatchForm.propTypes = {};

export default memo(NewBatchForm);
