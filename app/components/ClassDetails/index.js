/**
 *
 * ClassDetails
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import '../../Styles/classDetails.scss';
import BarChart from '../BarChart';
import { Input, Menu, Segment, Divider } from 'semantic-ui-react'
import ReactQuill from 'react-quill'; // ES6
import CustomButton from '../CustomButton';

function ClassDetails(props) {
  return (
    <div className="wrapper">

      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <div className="class-details-card" >
          <div className="class-details-card__cnt js-class-cnt">

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <div>

                <div className="class-details-card__name">Science</div>
                <div className="class-details-card__txt"> <strong>Instructor Name: </strong>Deepak Singh</div>
                <div className="class-details-card__txt"> <strong>Class Duration: </strong>1 hour</div>
                <div className="class-details-card__txt"> <strong>Starting Time: </strong>Decemeber 20, 3:00pm IST</div>
                <div className="class-details-card__txt"> <strong>Batch: </strong>2019-2020</div>
              </div>

              {
                props.type !== 'student' ? <div>


                  <div className="class-details-card-inf">
                    <div className="class-details-card-inf__item">
                      <CustomButton text="End Class" />

                    </div>

                    <div className="class-details-card-inf__item">
                      <CustomButton text="Send Report" disabled />
                    </div>
                  </div>
                </div> :
                 <div>


                 <div className="class-details-card-inf">
                   <div className="class-details-card-inf__item">
                     <CustomButton text="Leave Class" />

                   </div>

                   <div className="class-details-card-inf__item">
                     <CustomButton text="Create Doubt"/>
                   </div>
                 </div>
               </div>
              }

            </div>






          </div>

          <div>
            <h3 style={{ "textAlign": 'center' }}>Students Joined</h3>
            <BarChart />
          </div>

        </div>



        <div className="class-doubts-card" >


          <div>
            <Menu attached='top' tabular>
              <Menu.Item
                name='notes'
                active='notes'

              />
              <Menu.Item
                name='doubts'
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input
                    transparent
                    icon={{ name: 'search', link: true }}
                    placeholder={`search `}
                  />
                </Menu.Item>

              </Menu.Menu>
            </Menu>

            <ReactQuill value="" theme="snow" style={{ height: 250 }} />


          </div>




        </div>

      </div>


      <div className="class-students-card" >

        <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Students</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', cursor: 'pointer' }}>
          <p style={{ fontSize: "20px" }}>Name</p>
          <p style={{ fontSize: "20px" }}>Doubts</p>
          <p style={{ fontSize: "20px" }}>Status</p>


        </div>

        <Divider />

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', cursor: 'pointer' }}>
          <p style={{ fontSize: "20px" }}>Himanshu</p>
          <p>(1)</p>
          <div style={{ borderRadius: "50%", height: 10, width: 10, backgroundColor: 'green' }} />

        </div>
        <Divider />

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', cursor: 'pointer' }}>
          <p style={{ fontSize: "20px" }}>Puneet</p>
          <p>(0)</p>
          <div style={{ borderRadius: "50%", height: 10, width: 10, backgroundColor: 'grey' }} />

        </div>
        <Divider />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', cursor: 'pointer' }}>
          <p style={{ fontSize: "20px" }}>Rahul</p>
          <p>(1)</p>
          <div style={{ borderRadius: "50%", height: 10, width: 10, backgroundColor: 'green' }} />

        </div>
        <Divider />

      </div>


    </div >

  );
}

ClassDetails.propTypes = {};

export default memo(ClassDetails);
