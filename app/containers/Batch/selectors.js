import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the batch state domain
 */

const selectBatchDomain = state => state.batch || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Batch
 */

const makeSelectBatch = () =>
  createSelector(
    selectBatchDomain,
    substate => substate,
  );

export default makeSelectBatch;
export { selectBatchDomain };
