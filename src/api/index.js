import axios from 'axios';
import { useEffect, useState} from 'react';

const COUNTRY_SUMMARY_URL = 'https://data.covid19india.org/data.json';
const COUNTRY_STATES_URL = 'https://data.covid19india.org/data.json';
const COUNTRY_STATE_DAILY_URL = 'https://data.covid19india.org/states_daily.json';

const axiosConfig = {
    header: {
        'Access-Control-Allow-Origin': '*'
    }
}


export const fetchCountrySummary = async () => {
  try {
    const {data: {statewise}} = await axios(COUNTRY_SUMMARY_URL, axiosConfig)
 
    let result = {
        confirmed: 0,
        active: 0,
        recovered: 0,
        deaths: 0,
    }

    result = statewise.reduce((acc, s) => ({
        confirmed: parseInt(s.confirmed) + parseInt(acc.confirmed),
        active: parseInt(s.active) + parseInt(acc.active),
        recovered: parseInt(s.recovered) + parseInt(acc.recovered),
        deaths: parseInt(s.deaths) + parseInt(acc.deaths),
    }), result)
    // console.log(response)
    // console.log(result)
    console.log(result)
    return result
  } catch (err) {
    console.error(err)
    return null
  }
};


export const fetchCountryStates = async () => {
    try {
        const {data: {statewise} }= await axios(COUNTRY_STATES_URL,axiosConfig)
        // console.log(response)

        let result = [{
          Name: statewise[2].state,
          Confirmed: parseInt(statewise[2].confirmed),
          Active: parseInt(statewise[2].active),
          Recovered: parseInt(statewise[2].recovered),
          Deaths: parseInt(statewise[2].deaths)
        }]

        return result
    } catch (err) {
      console.error(err)
      return null
    }
  };


export const fetchStateDaily = async () => {
    try {
        const response = await axios(COUNTRY_STATE_DAILY_URL,axiosConfig)
        console.log(response)
        return response
    } catch (err) {
      console.error(err)
      return null
    }
};


