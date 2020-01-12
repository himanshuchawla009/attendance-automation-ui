/**
 *
 * Asynchronously loads the component for Batch
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
