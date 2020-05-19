import { get } from './utils';

const imageApiUrl = (city) => `https://api.unsplash.com/photos/random?query=town,${city}&client_id=3a6b2b5824efdc5f1eecfdc2039dea3a5bad5a6bc989ac420038f5096dd1136a&auto=format`;

export default (city) => get(imageApiUrl(city)).then((data) => data.urls.small);
