import { WEATHER_DATA_RECEIVED } from './weather.actions';

const initialState = {
  citiesWeatherData: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case WEATHER_DATA_RECEIVED:
      return {
        ...state,
        citiesWeatherData: action.payload.citiesWeatherData,
      };
  }
};

export default weatherReducer;
