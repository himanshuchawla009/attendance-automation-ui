import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the class state domain
 */

const selectClassDomain = state => state.class || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Class
 */

const makeSelectClass = () =>
  createSelector(
    selectClassDomain,
    substate => substate,
  );

export default makeSelectClass;
export { selectClassDomain };
