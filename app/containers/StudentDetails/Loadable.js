/**
 *
 * Asynchronously loads the component for StudentDetails
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
