/**
 *
 * Asynchronously loads the component for StudentClassroom
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
