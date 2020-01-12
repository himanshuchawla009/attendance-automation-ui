import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the batches state domain
 */

const selectBatchesDomain = state => state.batches || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Batches
 */

const makeSelectBatches = () =>
  createSelector(
    selectBatchesDomain,
    substate => substate,
  );

export default makeSelectBatches;
export { selectBatchesDomain };
