/**
 *
 * NewStudentForm
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Form } from 'semantic-ui-react';
import CustomButton from '../CustomButton'

function NewStudentForm() {
  return (
    <Form style={{ marginTop: 10 }} size="large" style={{ width: "100%" }}>
      <Form.Field>
        <label>Student Name</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Roll Number</label>
        <input type="number" />
      </Form.Field>
      <CustomButton style={{ marginTop: "10px" }} text="ADD" onClick={() => props.handleStudentAdd()} />

    </Form>
  );
}

NewStudentForm.propTypes = {};

export default memo(NewStudentForm);
