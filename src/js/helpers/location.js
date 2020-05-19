import { get } from './utils';

export const locationUrl = 'https://ipinfo.io/json?token=c142541b052938';

export const getCoordinates = () => get(locationUrl).then((data) => {
  const [lat, lon] = data.loc.split(',');

  return { lat, lon };
});

export const getLocationDetails = () => get(locationUrl).then((data) => ({ city: data.city, country: data.country }));

const getUserLocationApiUrl = (city) => `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=26e3f593764648559abed1d675ef4fec&language=en`;

export const getUserLocationData = (town) => get(getUserLocationApiUrl(town)).then((data) => {
  const { city, country } = data.results[0].components;
  const { lat, lng } = data.results[0].geometry;

  return {
    city,
    country,
    coordinates: {
      lat: String(lat),
      lon: String(lng),
    },
  };
});
