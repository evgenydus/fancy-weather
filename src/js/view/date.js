import { months, weekDays } from '../constants';


export const getDateTimeString = () => {
  const currentTime = new Date();

  const day = currentTime.getDate();
  const month = months[currentTime.getMonth()];
  const weekDay = weekDays[currentTime.getDay()];
  const hours = currentTime.getHours();
  const minutes = (currentTime.getMinutes() < 10) ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
  return `${weekDay} ${day} ${month} ${hours}:${minutes}`;
};

export const getWeekDay = (timestamp) => {
  const date = new Date(timestamp);
  return weekDays[date.getDay()];
};
