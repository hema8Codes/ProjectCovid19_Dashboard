import React, { useState, useEffect } from 'react';
import styles from './CountrySummary.module.css';
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { fetchCountrySummary } from '../../api/index';
import CovidData from './CovidData'
import DonutChartData from './DonutChartData';
import axios from 'axios';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import StateDaily from '../StateDaily/StateDaily';

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
  const [totalStates, setTotalStates] = useState([]);
  // const [statesArrayLength, setStateArrayLength] = useState("");
  // let [filtered] = useState;

  useEffect(() => {
    const fetchData = async () => {
      try{
        // const {data: {statewise}} = await axios(url, axiosConfig)
        const resp = await axios(url, axiosConfig)
          
          // setStates(statewise)
          setStates(resp.data.statewise.slice(1));
  
          console.log(states);

          let result = {
            confirmed: 0,
            active: 0,
            recovered: 0,
            deaths: 0,
        }
        const {data: {statewise}} = await axios(url, axiosConfig)
          result = statewise.slice(1).reduce((acc, s) => ({
            confirmed: parseInt(s.confirmed) + parseInt(acc.confirmed),
            active: parseInt(s.active) + parseInt(acc.active),
            recovered: parseInt(s.recovered) + parseInt(acc.recovered),
            deaths: parseInt(s.deaths) + parseInt(acc.deaths),
        }), result)
    

        setTotalStates(result)
        // console.log("hi" + totalStates)

        console.log(result);
                
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
      <Grid item md={2} component={Card} className={styles.card}>

      <CardContent> <DonutChartData totalStates={totalStates} /></CardContent> 
      </Grid>       <Grid item md={6} component={Card} className={styles.card}>
      <CardContent>   <StateDaily /></CardContent>  


    </Grid>

      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={styles.container}
      >
        <Grid item md={2} component={Card} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" variant='h4'>Confirmed</Typography>
            <Typography variant="h6">{summary.confirmed}</Typography>
          </CardContent>
        </Grid>
        <Grid item md={2} component={Card} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" variant='h4'>Active</Typography>
            <Typography variant="h6">{summary.active}</Typography>
          </CardContent>
        </Grid>
        <Grid item md={2} component={Card} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" variant='h4'>Recovered</Typography>
            <Typography variant="h6">{summary.recovered}</Typography>
          </CardContent>
        </Grid>
        <Grid item md={2} component={Card} className={styles.card}>
          <CardContent>
            <Typography color="textSecondary" variant='h4'>Deaths</Typography>
            <Typography variant="h6">{summary.deaths}</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Box>

    <table class="table table-striped" >
        <thead class="thead-dark">
          <tr>
            <th scope="col">STATE/UT</th>
            <th scope="col">CONFIRMED</th>
            <th scope="col">ACTIVE</th>
            <th scope="col">RECOVERED</th>
            <th scope="col">DECEASED</th>
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
