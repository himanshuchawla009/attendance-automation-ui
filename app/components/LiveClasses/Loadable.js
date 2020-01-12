/**
 *
 * Asynchronously loads the component for LiveClasses
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
