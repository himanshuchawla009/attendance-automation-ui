/**
 *
 * Asynchronously loads the component for ClassDetails
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
