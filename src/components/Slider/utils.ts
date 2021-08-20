export const stepConvert = (length: number, step: number) => {
  return Math.floor(length / step) * step;
};

export const percentToString = (percent: number) => {
  return percent.toFixed(2) + '%';
};
