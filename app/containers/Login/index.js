/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form } from 'semantic-ui-react'
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Cell from 'components/Cell';
import IconWithBorder from 'components/IconWithBorder'
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import CustomButton from 'components/CustomButton'
import { useHistory } from "react-router-dom";

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  let [role, selectRole] = useState("student");


  function handleStudentSelect() {
    selectRole("student")

  }

  function handleTeacherSelect() {
    selectRole("teacher")

  }

  function handleLogin() {
    if(role === 'student') {
      props.history.push('/student')

    } else {
      props.history.push('/batches')

    }

  }

  return (
    <div style={{
      width: "100%",
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Cell height="400px" width="400px" style={{ marginTop: "15%" }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: "20px" }}>
            <h1>Sign In</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <IconWithBorder height="100px" width="170px" handleRoleToggle={handleStudentSelect} disabled={role === 'student' ? false : true} iconName="student" subText="Student" />
              <IconWithBorder height="100px" width="170px" handleRoleToggle={handleTeacherSelect} disabled={role === 'teacher' ? false : true} iconName="users" subText="Teacher" />
            </div>

            <Form style={{ marginTop: 10 }}>
              <Form.Field>
                <label>Email</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" />
              </Form.Field>

            </Form>
            <CustomButton style={{ marginTop: "10px" }} text="LOGIN" onClick={() => handleLogin()} />


          </div>
        </Cell>
      </div>

    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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

export default compose(withConnect)(Login);
