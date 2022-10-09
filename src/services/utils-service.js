const { utcToZonedTime, format } = require('date-fns-tz');

export const convertCentsToDollar = (value) => !value || isNaN(value) || value <= 0 ? null : (value / 100).toFixed(2);

export const convertDateFromUtcToZonedTime = (utcDate, timeZone) => {
  if (!utcDate || !timeZone) {
    return null;
  }
  
  const date = new Date(utcDate);
  
  if (!isValidDate(date)) {
    return null;
  }
  
  return utcToZonedTime(date, timeZone); 
};

export const getFormattedDate = (startDate, endDate) => {
  if (!startDate || !endDate || !isValidDate(startDate) || !isValidDate(endDate)) {
    return null;
  }
  
  const startDateFormatted = format(startDate, 'LLL d, E H:mm a');
  const endDateFormatted = format(endDate, 'H:mm a ');
  
  return `${startDateFormatted} - ${endDateFormatted} PDT`.toUpperCase();
};

export const formatUSAPhoneNumber = (phoneNumberString) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]} ${match[3]}`;
  }
  return null;
};

const isValidDate = (d) => {
  return d instanceof Date && !isNaN(d);
};