import { Button } from '../components/tool-menu/button';
import { languages } from '../constants';

export default (view) => {
  view.toolMenu = view.createElement({ className: 'menu' });
  view.toolBar = view.createElement({ className: 'tool-wrapper' });
  view.searchBar = view.createElement({ className: 'city-search' });
  view.refreshButton = new Button('', 'refresh').getNode();
  view.refreshIcon = view.createElement({ className: ['icon', 'material-icons'], tag: 'i', attributes: { innerText: 'loop' } });
  view.dropdown = view.createElement({ className: 'lang', tag: 'select' });
  view.langEn = view.createElement({ tag: 'option', attributes: { innerText: languages.en, value: languages.en } });
  view.langRu = view.createElement({ tag: 'option', attributes: { innerText: languages.ru, value: languages.ru } });
  view.langBy = view.createElement({ tag: 'option', attributes: { innerText: languages.by, value: languages.by } });
  view.switchBox = view.createElement({ className: 'temp-unit-switcher' });
  view.tempF = view.createElement({ className: ['temp-unit', 'fahrenheit'], attributes: { innerHTML: 'F&deg;' } });
  view.tempC = view.createElement({ className: ['temp-unit', 'celsius', 'active'], attributes: { innerHTML: 'C&deg;' } });
  view.input = view.createElement({ className: 'search-line', tag: 'input', attributes: { type: 'text', placeholder: 'Search city' } });
  view.searchButton = new Button('Search', 'btn-search').getNode();

  view.toolMenu.append(view.toolBar, view.searchBar);
  view.toolBar.append(view.refreshButton, view.dropdown, view.switchBox);
  view.refreshButton.append(view.refreshIcon);
  view.dropdown.append(view.langEn, view.langRu, view.langBy);
  view.switchBox.append(view.tempF, view.tempC);
  view.searchBar.append(view.input, view.searchButton);
};
