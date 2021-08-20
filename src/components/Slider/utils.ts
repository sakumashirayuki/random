export const stepConvert = (length: number, step: number) => {
  // get the decimal length of step
  console.log(typeof step);
  console.log(step !== Math.floor(step));
  const decimals =
    step !== Math.floor(step) ? step.toString().split('.')[1].length : 0;
  return Number((Math.floor(length / step) * step).toFixed(decimals));
};

export const percentToString = (percent: number) => {
  return percent.toFixed(2) + '%';
};
