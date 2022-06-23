export function formatDate(d) {
  const _date = new Date(d);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let _month = months[_date.getMonth()];
  let _year = _date.getFullYear();
  let _day = _date.getDate();
  let _hour = _date.getHours();
  let _minute = _date.getMinutes();
  let formatedDate = `${_day} ${_month} ${_year} ${_hour}:${_minute}`;
  return formatedDate;
}
