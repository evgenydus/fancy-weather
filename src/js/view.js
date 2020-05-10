import createToolMenu from './view/tool-menu';
import createForecastBlock from './view/forecast';
import createLocationBlock from './view/map';
import { wrapper, tempUnits } from './constants';
import { getDateTimeString } from './view/date';
import { withUnit } from './unused/utils';

class View {
  constructor() {
    this.wrapper = this.getElement('#container');
    createToolMenu(this);
    createForecastBlock(this);
    createLocationBlock(this);

    this.wrapper.append(this.toolMenu);
    this.wrapper.append(this.weatherWrapper);
  }

  setBackground(backgroundImageUrl) {
    wrapper.style.backgroundImage = `url("${backgroundImageUrl}")`;
  }

  createElement({ tag = 'div', className = '', attributes = {} }) {
    const element = document.createElement(tag);

    if (Array.isArray(className)) {
      className.forEach((cls) => {
        element.classList.add(cls);
      });
    } else if (className) {
      element.classList.add(className);
    }

    Object.assign(element, attributes);

    return element;
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  bindRefreshButtonClick(handler) {
    this.refreshButton.addEventListener('click', handler);
  }

  bindDropdownChange(handler) {
    this.dropdown.addEventListener('change', (event) => {
      handler(event.target.value);
    });
  }

  bindTempUnitChange(handler) {
    this.switchBox.addEventListener('click', handler);
  }

  setTempUnit(unit) {
    Array.from(this.switchBox.children).forEach((item) => {
      item.classList.remove('active');
    });

    if (unit === tempUnits.c) {
      this.tempC.classList.add('active');
    } else {
      this.tempF.classList.add('active');
    }
  }

  bindSearchButtonClick(handler) {
    this.searchButton.addEventListener('click', () => {
      const searchQuery = this.input.value;
      handler(searchQuery);
    });
  }

  setWeatherTitle(city, country) {
    this.cityEl.innerText = `${city}, ${country}`;
    // TODO: implement time update
    this.dateEl.innerText = getDateTimeString();
  }

  setWeather(weather) {
    const {
      currently: {
        icon, temp, summary, feelsLike, wind, humidity,
      },
      daily,
    } = weather;

    this.skycons.set('iconMain', icon.toUpperCase().replace(/-/g, '_'));
    this.temperatureValueEl.innerHTML = temp;
    this.summaryEl.innerText = summary;
    this.feelsLikeEl.innerHTML = `Feels Like: ${feelsLike}`;
    this.windEl.innerText = `Wind: ${wind}`;
    this.humidityEl.innerText = `Humidity: ${humidity}`;

    daily.forEach((day, index) => {
      this.skycons.set(`iconDay${index + 1}`, day.icon);
      this[`day${index + 1}`].innerText = day.weekDay;
      this[`day${index + 1}Conditions`].innerHTML = day.temp;
    });
    this.skycons.play();
  }

  showCoordinates({ lat, lon }) {
    const [latDeg, latMin, lonDeg, lonMin] = [...lat.split('.'), ...lon.split('.')];
    const toFormatted = (degrees, minutes) => `${withUnit(degrees)} ${withUnit(String(minutes * 60).substr(0, 2), '\'')}`;

    const data = [
      ['Latitude', latDeg, latMin],
      ['Longitude', lonDeg, lonMin],
    ];

    data.forEach(([name, deg, min]) => {
      this[`map${name}`].innerHTML = `${name}: ${toFormatted(deg, min)}`;
    });
  }
}

export default View;
