import fetchData from './weather.gateway';

export const WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED';

export const weatherDataReceived = citiesWeatherData => ({
  type: WEATHER_DATA_RECEIVED,
  payload: { citiesWeatherData },
});

export const getWeatherData = () => dispatch => {
  fetchData().then(data => dispatch(weatherDataReceived(data)));
};
