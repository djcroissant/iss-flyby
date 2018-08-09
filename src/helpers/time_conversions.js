export function s_to_min(seconds) {
  // takes number of seconds in string form
  // converts to minutes and rounds to nearest whole number
  // returns minutes in string form
  const s = parseInt(seconds);            // API gives seconds as string
  const m = Math.round(s / 60);
  return m.toString();
}

export function ms_to_time(milliseconds) {
  const ms = parseInt(milliseconds);      // API gives milliseconds as string
  const date = new Date(ms * 1000);       // api cuts trailing zeros
  return date.toLocaleTimeString();
}

export function ms_to_date(milliseconds) {
  const ms = parseInt(milliseconds);      // API gives milliseconds as string
  const date = new Date(ms * 1000);       // api cuts trailing zeros
  return date.toLocaleDateString();
}

export function twelve_to_twentyfour(time) {
  let hours = Number(time.match(/^(\d+)/)[1]);
  const minutes = Number(time.match(/:(\d+)/)[1]);
  const AMPM = time.match(/\s(.*)$/)[1];
  if (AMPM === "PM" && hours < 12) hours = hours + 12;
  if (AMPM === "AM" && hours === 12) hours = hours - 12;
  let sHours = hours.toString();
  let sMinutes = minutes.toString();
  if (hours < 10) sHours = "0" + sHours;
  if (minutes < 10) sMinutes = "0" + sMinutes;
  return (sHours + ":" + sMinutes);
}