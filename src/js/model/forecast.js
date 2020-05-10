import { get, withUnit } from '../unused/utils';
import { getWeekDay } from '../view/date';

const units = 'si';
const getWeather = ({ lat, lon }) => {
  const currentWeatherUrl = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/118af48d9f58833ee4dd59b21e746102/${lat},${lon}?units=${units}`;
  return get(currentWeatherUrl)
    .then((data) => {
      const { currently, daily: { data: [, day1, day2, day3] } } = data;
      return {
        currently: {
          temp: withUnit(Math.round(currently.temperature)),
          summary: currently.summary,
          feelsLike: withUnit(Math.round(currently.apparentTemperature)),
          wind: withUnit(Math.round(currently.windSpeed), ' m/s'),
          humidity: withUnit(currently.humidity * 100, '%'),
          icon: currently.icon,
        },
        daily: [
          {
            weekDay: getWeekDay(day1.time * 1000),
            temp: withUnit(Math.round((day1.temperatureMin + day1.temperatureMax) / 2)),
            icon: day1.icon.toUpperCase().replace(/-/g, '_'),
          },
          {
            weekDay: getWeekDay(day2.time * 1000),
            temp: withUnit(Math.round((day2.temperatureMin + day2.temperatureMax) / 2)),
            icon: day2.icon.toUpperCase().replace(/-/g, '_'),
          },
          {
            weekDay: getWeekDay(day3.time * 1000),
            temp: withUnit(Math.round((day3.temperatureMin + day3.temperatureMax) / 2)),
            icon: day3.icon.toUpperCase().replace(/-/g, '_'),
          },
        ],
      };
    });
};

export default getWeather;
