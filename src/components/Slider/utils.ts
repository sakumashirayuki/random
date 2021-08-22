export const stepConvert = (
  length: number,
  step: number,
  min: number,
  max: number,
) => {
  /**
   * length: 0~100
   */
  const decimals =
    step !== Math.floor(step) ? step.toString().split('.')[1].length : 0;
  let convertedValue = Number(
    (Math.floor(length / step) * step).toFixed(decimals),
  );
  convertedValue = Math.max(convertedValue, min);
  convertedValue = Math.min(convertedValue, max);
  return convertedValue;
};

export const percentToString = (percent: number) => {
  return percent.toFixed(2) + '%';
};

export const valueToLength = (value: number, min: number, max: number) => {
  return ((value - min) / max) * 100;
};

export const lengthToValue = (length: number, min: number, max: number) => {
  return (length / 100) * (max - min) + min;
};
