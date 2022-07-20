/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';

const Weather = ({ citiesWeatherData, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {citiesWeatherData.map(city => {
          const { id, temperature, name } = city;
          return (
            <li className="city" key={id}>
              <span className="city__name">{name}</span>
              <span className="city__temperature">{`${temperature} F`}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

const mapState = state => {
  return { citiesWeatherData: state.weather.citiesWeatherData };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
