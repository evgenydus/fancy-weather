export const get = (url) => fetch(url).then((response) => response.json());

export const withUnit = (value, unit = '&deg;') => `${value}${unit}`;
