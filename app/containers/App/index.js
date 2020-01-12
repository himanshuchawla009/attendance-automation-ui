/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Login from 'containers/Login/Loadable';
import StudentDetails from 'containers/StudentDetails/Loadable';
import Batches from 'containers/Batches/Loadable';
import Student from 'containers/Student/Loadable';
import StudentClassRoom from 'containers/StudentClassroom/Loadable';

import Class from 'containers/Class/Loadable';



import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/batches" component={Batches} />
      <Route exact path="/studentDetail" component={StudentDetails} />
      <Route exact path="/student" component={Student} />
      <Route exact path="/classroom" component={Class} />
      <Route exact path="/studentClassRoom" component={StudentClassRoom} />

      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}
