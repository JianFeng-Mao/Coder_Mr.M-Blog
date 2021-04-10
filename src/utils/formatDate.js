export default function formatDate(timestamp, showTime = false) {
  const date = new Date(+timestamp);
  const day = date
    .getDate()
    .toString()
    .padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  let str = '';
  str += `${date.getFullYear()}-${month}-${day}`;
  if (showTime) {
    const hour = date
      .getHours()
      .toString()
      .padStart(2, '0');
    const minute = date
      .getMinutes()
      .toString()
      .padStart(2, '0');
    const second = date
      .getSeconds()
      .toString()
      .padStart(2, '0');
    str += `   ${hour}:${minute}:${second}`;
  }
  return str;
}
