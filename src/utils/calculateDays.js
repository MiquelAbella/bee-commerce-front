export const calculateDays = (startDate, endDate) => {
  let difference = new Date(endDate).getTime() - new Date(startDate).getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
};
