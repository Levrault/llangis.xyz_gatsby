import CONTEXT from './appConstant';

/**
 * Return next context
 * @param {string} cyle
 */
const cycleContext = (cycle) => {
  switch (cycle) {
  case CONTEXT.GAMEDEV:
    return CONTEXT.WEBDEV;
    break;
  case CONTEXT.WEBDEV:
    return CONTEXT.GAMEDEV;
    break;
  default:
    return CONTEXT.WEBDEV;
  }
};

export default cycleContext;
