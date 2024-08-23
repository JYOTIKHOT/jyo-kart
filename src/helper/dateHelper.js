export function dateToUnixTimeStamp(date) {
  return Math.floor(date.getTime() / 1000);
}

export function unixTimeStampToDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString();
}

export function createDate(date, days, weeks, months, years) {
  const newDate = new Date();
  newDate.setDate(date.getDate() + days + 7 * weeks);
  newDate.setDate(date.getMonth() + months);
  newDate.setDate(date.getFullYear() + years);
  return date;
}
