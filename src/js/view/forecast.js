// import Skycons from 'skycons';

export default (view) => {
  view.weatherWrapper = view.createElement({ className: 'weather-wrapper' });
  view.forecast = view.createElement({ className: 'forecast' });

  view.forecastTitleEl = view.createElement({ className: 'forecast-title' });
  view.cityEl = view.createElement({ className: 'city', tag: 'h2' });
  view.dateEl = view.createElement({ className: 'date', tag: 'p' });
  view.temperatureEL = view.createElement({ className: 'temperature' });
  view.temperatureValueEl = view.createElement({ className: 'temperature-value', tag: 'span' });
  view.conditionIconEl = view.createElement({ className: 'condition-icon' });
  // view.skycons = new Skycons({ color: '#fff' });
  // view.currentIconCanvas = view.createElement({ tag: 'canvas', attributes: { id: 'iconMain', width: 128, height: 128 } });

  view.conditionsEl = view.createElement({ className: 'conditions', tag: 'ul' });
  view.summaryEl = view.createElement({ className: 'condition-item', tag: 'li' });
  view.feelsLikeEl = view.createElement({ className: 'condition-item', tag: 'li' });
  view.windEl = view.createElement({ className: 'condition-item', tag: 'li' });
  view.humidityEl = view.createElement({ className: 'condition-item', tag: 'li' });

  view.futureForecastEl = view.createElement({ className: 'future-forecast', tag: 'ul' });
  view.forecastItem1 = view.createElement({ className: 'forecast-item', tag: 'li' });
  view.forecastItem2 = view.createElement({ className: 'forecast-item', tag: 'li' });
  view.forecastItem3 = view.createElement({ className: 'forecast-item', tag: 'li' });
  view.day1 = view.createElement({ className: 'day', tag: 'p' });
  view.day1Conditions = view.createElement({ className: 'next-conditions' });
  // view.day1IconCanvas = view.createElement({ tag: 'canvas', className: 'forecast-icon', attributes: { id: 'iconDay1', width: 64, height: 64 } });
  view.day2 = view.createElement({ className: 'day', tag: 'p' });
  view.day2Conditions = view.createElement({ className: 'next-conditions' });
  // view.day2IconCanvas = view.createElement({ tag: 'canvas', className: 'forecast-icon', attributes: { id: 'iconDay2', width: 64, height: 64 } });
  view.day3 = view.createElement({ className: 'day', tag: 'p' });
  view.day3Conditions = view.createElement({ className: 'next-conditions' });
  // view.day3IconCanvas = view.createElement({ tag: 'canvas', className: 'forecast-icon', attributes: { id: 'iconDay3', width: 64, height: 64 } });

  view.weatherWrapper.append(view.forecast);
  view.forecast.append(view.forecastTitleEl, view.temperatureEL, view.conditionsEl, view.futureForecastEl);
  view.forecastTitleEl.append(view.cityEl, view.dateEl);
  view.temperatureEL.append(view.temperatureValueEl);
  // view.conditionIconEl.append(view.currentIconCanvas);
  view.conditionsEl.append(view.conditionIconEl, view.summaryEl, view.feelsLikeEl, view.windEl, view.humidityEl);
  view.futureForecastEl.append(view.forecastItem1, view.forecastItem2, view.forecastItem3);
  view.forecastItem1.append(view.day1, view.day1Conditions, /*view.day1IconCanvas*/);
  view.forecastItem2.append(view.day2, view.day2Conditions, /*view.day2IconCanvas*/);
  view.forecastItem3.append(view.day3, view.day3Conditions, /*view.day3IconCanvas*/);
};
