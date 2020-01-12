/**
 *
 * NewClassForm
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Form } from 'semantic-ui-react';
import CustomButton from '../CustomButton'
function NewClassForm(props) {
  return (

    <Form style={{ marginTop: 10 }} size="large" style={{ width: "100%" }}>
      <Form.Field>
        <label>Subject</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Topic</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Start Time</label>
        <input type="time" />
      </Form.Field>
      <CustomButton style={{ marginTop: "10px" }} text="START" onClick={() => props.handleClassStart()} />

    </Form>


  );
}

NewClassForm.propTypes = {};

export default memo(NewClassForm);
