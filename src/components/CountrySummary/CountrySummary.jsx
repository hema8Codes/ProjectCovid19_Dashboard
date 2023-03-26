import React, { useState, useEffect } from 'react';
import styles from './CountrySummary.module.css';
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { fetchCountrySummary } from '../../api/index';
import CovidData from './CovidData'
import axios from 'axios';
const axiosConfig = {
  header: {
      'Access-Control-Allow-Origin': '*'
  }
}
const url = 'https://data.covid19india.org/data.json';


const CountrySummary = () => {
  const [summary, setSummary] = useState({
    confirmed: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
  })

  // const [loading, setLoading] = useState(loading);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountrySummary();
      setSummary(data);
      // setLoading(false);
    };
    fetchData();
  },[])

  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const {data: {statewise}} = await axios(url, axiosConfig)
          
          setStates(statewise)
  
          console.log(states);
                
      }catch(error){
        console.log(error.response)
      }
      // setLoading(false);
    };
    fetchData();
  },[])


  // if (loading) {
  //   return 'Loading...'
  // }
  return (
    <Box color="text.primary" className={styles.container}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={styles.container}
      >
        <Grid item md={3} component={Card} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" variant='h4'>Confirmed</Typography>
            <Typography variant="h6">{summary.confirmed}</Typography>
          </CardContent>
        </Grid>
        <Grid item md={3} component={Card} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" variant='h4'>Active</Typography>
            <Typography variant="h6">{summary.active}</Typography>
          </CardContent>
        </Grid>
        <Grid item md={3} component={Card} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" variant='h4'>Recovered</Typography>
            <Typography variant="h6">{summary.recovered}</Typography>
          </CardContent>
        </Grid>
        <Grid item md={3} component={Card} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" variant='h4'>Deaths</Typography>
            <Typography variant="h6">{summary.deaths}</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Box>

    <table>
        <thead>
          <tr>
            <th>STATE/UT</th>
            <th>CONFIRMED</th>
            <th>ACTIVE</th>
            <th>RECOVERED</th>
            <th>DECEASED</th>
            </tr>
        </thead>
        <tbody>
        <CovidData states={states}/>
            </tbody>
    </table>

      </Box>

    </Box>
  )
}

export default CountrySummary;
