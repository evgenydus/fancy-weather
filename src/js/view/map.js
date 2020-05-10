export default (view) => {
  view.locationBlock = view.createElement({ className: 'location' });
  view.mapEl = view.createElement({ className: 'map', attributes: { id: 'map' } });
  view.coordinatesList = view.createElement({ className: 'coordinates', tag: 'ul' });
  view.mapLatitude = view.createElement({ className: 'coordinate-item', tag: 'li' });
  view.mapLongitude = view.createElement({ className: 'coordinate-item', tag: 'li' });

  view.weatherWrapper.append(view.locationBlock);
  view.locationBlock.append(view.mapEl, view.coordinatesList);
  view.coordinatesList.append(view.mapLatitude, view.mapLongitude);
};
