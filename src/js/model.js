import { languages, tempUnits } from './constants';
import { getUserLocationData } from './helpers/location';
import getWeather from './model/forecast';
import { updateMap } from './helpers/map';

class Model {
  constructor() {
    this.backgroundImageUrl = '';
    this.lang = languages.en;
    this.tempUnit = tempUnits.c;
    this.city = '';
    this.country = '';
    this.coordinates = {
      lat: '',
      lon: '',
    };
    this.weather = {
      currently: {
        temp: 0,
        summary: '',
        feelsLike: 0,
        wind: 0,
        humidity: 0,
        icon: '',
      },
      daily: [
        {
          weekDay: '',
          temp: 0,
          icon: '',
        },
        {
          weekDay: '',
          temp: 0,
          icon: '',
        },
        {
          weekDay: '',
          temp: 0,
          icon: '',
        },
      ],
    };
  }

  changeLang(newLang = languages.en) {
    this.lang = newLang;
  }

  toggleTempUnit() {
    if (this.tempUnit === tempUnits.c) {
      this.tempUnit = tempUnits.f;
    } else {
      this.tempUnit = tempUnits.c;
    }
  }

  searchByCity(city) {
    return getUserLocationData(city).then((data) => {
      this.city = data.city;
      this.country = data.country;
      this.coordinates = data.coordinates;
      updateMap(this.coordinates);
    });
  }

  updateWeatherData() {
    return getWeather(this.coordinates).then((weather) => {
      this.weather = weather;
    });
  }
}

export default Model;
