
const formatter = Intl.NumberFormat('en', { notation: 'compact' });
export const convertNumber = (number: number) => {
  return formatter.format(number);
};