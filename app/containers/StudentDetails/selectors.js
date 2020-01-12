import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the studentDetails state domain
 */

const selectStudentDetailsDomain = state =>
  state.studentDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StudentDetails
 */

const makeSelectStudentDetails = () =>
  createSelector(
    selectStudentDetailsDomain,
    substate => substate,
  );

export default makeSelectStudentDetails;
export { selectStudentDetailsDomain };
