/* eslint-disable no-promise-executor-return */
function delay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default delay;
