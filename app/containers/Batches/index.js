/**
 *
 * Batches
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Modal from 'components/Modal'
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBatches from './selectors';
import reducer from './reducer';
import saga from './saga';
import Card from 'components/Card';
import TopBar from 'components/TopBar';
import { Divider } from 'semantic-ui-react';
import HorizontalScroll from 'react-scroll-horizontal'
import CustomButton from 'components/CustomButton'
import Table from 'components/Table'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Avatar from "react-avatar";
import BatchDetails from 'components/BatchDetails';
import NewBatchForm from 'components/NewBatchForm';
import NewStudentForm from 'components/NewStudentForm';
import NewClassForm from 'components/NewClassForm';


let batches = [
  {
    name: "Summer Batch",
    startDate: "20-Decemenber,2019",
    endDate: "20-Decemenber,2020",
    progress: "50",
    classes: 20,
    students: 80,
    id: 0
  },
  {
    name: "Summer Batch",
    startDate: "20-Decemenber,2019",
    endDate: "20-Decemenber,2020",
    progress: "50",
    classes: 20,
    students: 80,
    id: 1
  },
  {
    name: "Summer Batch",
    startDate: "20-Decemenber,2019",
    endDate: "20-Decemenber,2020",
    progress: "50",
    classes: 20,
    students: 80,
    id: 2
  },
  {
    name: "Summer Batch",
    startDate: "20-Decemenber,2019",
    endDate: "20-Decemenber,2020",
    progress: "50",
    classes: 20,
    students: 80,
    id: 3
  },
  {
    name: "Summer Batch",
    startDate: "20-Decemenber,2019",
    endDate: "20-Decemenber,2020",
    progress: "50",
    classes: 20,
    students: 80,
    id: 4
  },
  {
    name: "Summer Batch",
    startDate: "20-Decemenber,2019",
    endDate: "20-Decemenber,2020",
    progress: "50",
    classes: 20,
    students: 80,
    id: 5
  }
]



const studentsData = [
  { id: 1, name: 'Himanshu', joiningDate: '2 December 2019', attandance: "20%", rollNumber: 1 },
  { id: 2, name: 'Rohit', joiningDate: '2 December 2019', attandance: "30%", rollNumber: 2 },
  { id: 3, name: 'Deepak', joiningDate: '2 December 2019', attandance: "40%", rollNumber: 3 },
  { id: 4, name: 'Shivank', joiningDate: '2 December 2019', attandance: "50%", rollNumber: 4 },
]
const studentsColumns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Attandance',
    selector: 'attandance',
    sortable: true,
    right: true,
  },
  {
    name: 'Roll Number',
    selector: 'rollNumber',
    sortable: true,
    right: true,
  },
  {
    name: 'Batch Joining Date',
    selector: 'joiningDate',
    sortable: true,
    right: true,
  }
];

const classesData = [
  { id: 1, subject: 'Science', classTime: '2 December 2019,2:00 pm', attandance: "20%", rollNumber: 1 },
  { id: 2, subject: 'Maths', classTime: '2 December 2019, 4:00 pm', attandance: "30%", rollNumber: 2 },
  { id: 3, subject: 'Python', classTime: '2 December 2019', attandance: "40%", rollNumber: 3 },
  { id: 4, subject: 'Data Structure', classTime: '2 December 2019', attandance: "50%", rollNumber: 4 },
]
const classColumns = [
  {
    name: 'Subject',
    selector: 'subject',
    sortable: true,
  },
  {
    name: 'Students presence',
    selector: 'attandance',
    sortable: true,
    right: true,
  },
  {
    name: 'Class timings',
    selector: 'classTime',
    sortable: true,
    right: true,
  }
];
export function Batches(props) {
  useInjectReducer({ key: 'batches', reducer });
  useInjectSaga({ key: 'batches', saga });
  let [selectedBatch, selectBatch] = useState(0);
  let [activeItem, selectSection] = useState("students");
  let [newBatchOpen, toggleNewBatch] = useState(false);
  let [newStudentOpen, toggleNewStudent] = useState(false);
  let [newClass, toggleNewClass] = useState(false);


  function handleSectionSelection(e, { name }) {
    selectSection(name)

  }
  function handleSelectBatch(id) {
    selectBatch(id);
  }

  function handleToggleNewBatch() {
    toggleNewBatch(!newBatchOpen)

  }
  function handleToggleNewStudent() {
    toggleNewStudent(!newStudentOpen)

  }
  function handleToggleNewClass() {
    toggleNewClass(!newClass)

  }

  function handleClassSelect(){

    props.history.push('/classroom')


  }

  function handleStudentSelect(){

    props.history.push('/studentDetail')


  }
  return (
    <div>
      <Helmet>
        <title>Batches</title>
        <meta name="description" content="Description of Batches" />

      </Helmet>
      <TopBar handleLogout ={()=> { props.history.push('/')}} />
      <Modal open={newBatchOpen} closeModal={handleToggleNewBatch} heading="New Batch" >
        <NewBatchForm />
      </Modal>

      <Modal open={newClass} closeModal={handleToggleNewClass} heading="New Class" >
        <NewClassForm handleClassStart={handleClassSelect} />
      </Modal>

      <Modal open={newStudentOpen} closeModal={handleToggleNewStudent} heading="New Student" >
        <NewStudentForm />
      </Modal>
      <div style={{ flexDirection: 'column' }}>
        <div style={{ flexDirection: 'row', marginLeft: "88%" }}>

          <CustomButton text="NEW BATCH" icon iconName="add" onClick={handleToggleNewBatch} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 40 }}>
          {
            batches.map((batch) => {
              return (
                <Card data={batch} selected={selectedBatch === batch.id} onClick={() => handleSelectBatch(batch.id)} />

              )
            })
          }
        </div>
        <div style={{ flexDirection: 'row', marginLeft: "88%" }}>
          <CustomButton text="<PREV" disabled />
          <CustomButton text="NEXT>" />
        </div>

      </div>


      <Divider />
      <div>
        <Menu attached='top' tabular>
          <Menu.Item
            name='students'
            active={activeItem === 'students'}
            onClick={(e, { name }) => handleSectionSelection(e, { name })}
          />
          <Menu.Item
            name='classes'
            active={activeItem === 'classes'}
            onClick={(e, { name }) => handleSectionSelection(e, { name })}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder={`search ${activeItem}`}
              />
            </Menu.Item>
            <Menu.Item>
              <CustomButton text={activeItem === "students" ? "Add Student" : "Start Class"} icon iconName="add" onClick={activeItem === 'students' ? handleToggleNewStudent : handleToggleNewClass} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {
          activeItem === 'students' ?
            <Segment attached='bottom'>
              <Table
                cursor
                heading="Students"
                columns={studentsColumns}
                data={studentsData}
                showPagination
                onClick={handleStudentSelect}

              />
            </Segment> :
            <Segment attached='bottom'>
              <Table
                cursor
                heading="Classes"
                columns={classColumns}
                data={classesData}
                showPagination

              />
            </Segment>
        }

      </div>
 
    </div>
  );
}

Batches.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  batches: makeSelectBatches(),
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

export default compose(withConnect)(Batches);
