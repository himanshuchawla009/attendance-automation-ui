/**
 *
 * Asynchronously loads the component for Class
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
