const MONTH_IN_MILLISECONDS = 2629800000;

/** returns random timestamp from previous month, in milliseconds  */
export const getRandomTimestamp = () => {
  const maxTimestamp = Date.now();
  const minTimestamp = maxTimestamp - MONTH_IN_MILLISECONDS;

  return Math.floor(minTimestamp + Math.random() * maxTimestamp - minTimestamp);
};
