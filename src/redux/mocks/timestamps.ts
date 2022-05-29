import { getRandomTimestamp } from "../../utils/date";

export const timestamps = new Array(20)
  .fill(undefined)
  .map(() => getRandomTimestamp());
