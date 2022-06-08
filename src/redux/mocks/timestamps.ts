import { getRandomTimestamp } from "../../utils/date";

export const timestamps = new Array(100)
  .fill(undefined)
  .map(() => getRandomTimestamp());
