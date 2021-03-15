export const formatNumber = (num) => {
  return String(num?.toFixed(2)).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
