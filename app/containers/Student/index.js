/**
 *
 * Student
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
import makeSelectStudent from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import LiveClasses from 'components/LiveClasses';
import '../../Styles/student.scss';
import BarChart from '../../components/BarChart';
import { Divider } from 'semantic-ui-react';
import TopBar from 'components/TopBar';


export function Student(props) {
  useInjectReducer({ key: 'student', reducer });
  useInjectSaga({ key: 'student', saga });
  function handleClassJoin(){
      props.history.push('/studentClassRoom');
  }

  return (
    <div>
      <Helmet>
        <title>Student</title>
        <meta name="description" content="Description of Student" />
      </Helmet>
      <TopBar handleLogout ={()=> { props.history.push('/')}} />

       
      <div className="wrapper">



        <div className="student-details-card" >

          <div className="student-details-card__img">
            <img src="https://miro.medium.com/fit/c/256/256/2*xhm2q3S8_kRKnrHumo3Rvg.png" />
          </div>


          <div className="student-details-card__cnt js-student-cnt">

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <div>

                <div className="student-details-card__name">Himanshu Chawla</div>
                <div className="student-details-card__txt"> <strong>Roll Number: </strong>009</div>
                <div className="student-details-card__txt"> <strong>Phone Number: </strong>009</div>
                <div className="student-details-card__txt"> <strong>Address: </strong>009</div>
                <div className="student-details-card__txt"> <strong>Email: </strong>009</div>
                <div className="student-details-card__txt"> <strong>Batch: </strong>2019-2020</div>
              </div>

              <div>
                <div className="student-details-card-inf">
                  <div className="student-details-card-inf__item">
                    <div className="student-details-card-inf__title">70%</div>
                    <div className="student-details-card-inf__txt">Attandance</div>
                  </div>

                  <div className="student-details-card-inf__item">
                    <div className="student-details-card-inf__title">70</div>
                    <div className="student-details-card-inf__txt">Class Rank</div>
                  </div>
                </div>
              </div>

            </div>

            <Divider />

            <h2 style={{marginTop:'30px'}}>Attendance</h2>
            <BarChart />








          </div>


          {/* <BarChart /> */}

        </div>



        <LiveClasses  handleJoin={handleClassJoin}/>





      </div >



    </div>
  );
}

Student.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  student: makeSelectStudent(),
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
)(Student);
