let map;

export const drawMap = ({ lat, lon }) => {
  const init = () => {
    map = new ymaps.Map('map', {
      center: [lat, lon],
      zoom: 11,
    });
  };
  ymaps.ready(init);
};

export const updateMap = ({ lat, lon }) => {
  map.setCenter([lat, lon]);
};
