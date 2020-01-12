/**
 *
 * Modal
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import _ from 'lodash'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CustomModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        // onClose={props.handleClose}
      >
        <Modal.Header>{props.heading}</Modal.Header>
        <Modal.Content image scrolling>
          {props.children}
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={props.closeModal}>
            CLOSE
          </Button>
        </Modal.Actions>
      </Modal>

    </div>
  );
}

CustomModal.propTypes = {};

export default memo(CustomModal);
