import { getLocationDetails, getCoordinates } from './helpers/location';
import loadImageUrlFor from './helpers/update-background-for';
import { drawMap, updateMap } from './helpers/map';


class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onLocationUpdate();
    this.view.bindRefreshButtonClick(this.updateBackground.bind(this));
    this.view.bindDropdownChange(this.updateLanguage.bind(this));
    this.view.bindTempUnitChange(this.updateTempUnit.bind(this));
    this.view.bindSearchButtonClick(this.getUserLocationDetails.bind(this));
    drawMap(this.model.coordinates);
  }

  onLocationUpdate() {
    getLocationDetails().then((data) => {
      this.model.city = data.city;
      this.model.country = data.country;
      this.updateBackground();
      this.updateCoordinates();
      this.updateWeatherTitle();
    });
  }

  updateLanguage(lang) {
    this.model.changeLang(lang);
  }

  updateBackground() {
    loadImageUrlFor(this.model.city).then((url) => {
      this.model.backgroundImageUrl = url;
      this.view.setBackground(url);
    });
  }

  updateCoordinates() {
    getCoordinates().then((coordinates) => {
      this.model.coordinates = coordinates;
      this.model.updateWeatherData().then(() => { this.updateWeather(); });
      this.view.showCoordinates(this.model.coordinates);
      updateMap(this.model.coordinates);
    });
  }

  updateTempUnit() {
    this.model.toggleTempUnit();
    this.view.setTempUnit(this.model.tempUnit);
  }

  getUserLocationDetails(searchQuery) {
    this.model.searchByCity(searchQuery).then(() => {
      this.updateBackground();
      this.updateWeatherTitle();
      this.model.updateWeatherData().then(() => { this.updateWeather(); });
      this.view.showCoordinates(this.model.coordinates);
      updateMap(this.model.coordinates);
    });
  }

  updateWeatherTitle() {
    this.view.setWeatherTitle(this.model.city, this.model.country);
  }

  updateWeather() {
    this.view.setWeather(this.model.weather);
  }
}

export default Controller;
