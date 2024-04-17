export const convertToNumber = (input: string | undefined): number | null => {
  if (input === undefined) {
    console.error('Input is undefined');
    return null;
  }

  const numericValue = parseInt(input, 10);

  if (isNaN(numericValue)) {
    console.error('Input is not a valid number');
    return null;
  }

  return numericValue;
};
