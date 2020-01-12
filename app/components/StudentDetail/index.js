/**
 *
 * StudentDetail
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import '../../Styles/studentProfile.scss';
import {Divider } from 'semantic-ui-react';
import BarChart from '../BarChart';
function StudentDetail() {
  return (

    <div className="wrapper">


      <div className="profile-card" >



        <div className="profile-card__img">
          <img src="https://miro.medium.com/fit/c/256/256/2*xhm2q3S8_kRKnrHumo3Rvg.png" />
        </div>


        <div className="profile-card__cnt js-profile-cnt">

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
            <div>

              <div className="profile-card__name">Himanshu Chawla</div>
              <div className="profile-card__txt"> <strong>Roll Number: </strong>009</div>
              <div className="profile-card__txt"> <strong>Phone Number: </strong>009</div>
              <div className="profile-card__txt"> <strong>Address: </strong>009</div>
              <div className="profile-card__txt"> <strong>Email: </strong>009</div>
              <div className="profile-card__txt"> <strong>Batch: </strong>2019-2020</div>
            </div>

            <div>


              <div className="profile-card-inf">
                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">70%</div>
                  <div className="profile-card-inf__txt">Attandance</div>
                </div>

                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">70</div>
                  <div className="profile-card-inf__txt">Class Rank</div>
                </div>
              </div>
            </div>
          </div>






        </div>

        <h3 style={{"textAlign":'center'}}>Attandance Chart</h3>

        <BarChart />

      </div>


    </div>

  );
}

StudentDetail.propTypes = {};

export default memo(StudentDetail);
