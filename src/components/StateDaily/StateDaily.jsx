import { useEffect, useState } from 'react';
import axios from 'axios';
import LineChartData from './LineChartData';

const url = 'https://data.covid19india.org/states_daily.json';

const axiosConfig = {
  header: {
    'Access-Control-Allow-Origin': '*',
  },
};

const StateDaily = () => {
  const [statesDaily, setStatesDaily] = useState([]);
  const fetchData = async () => {
    try {
      const {
        data: { states_daily },
      } = await axios.get(url, axiosConfig);
      const result = states_daily;
     

       const filteredStatusConfirmed = result.filter(obj => (obj.status.includes( "Confirmed")));
       const filteredStatusRecovered = result.filter(obj => (obj.status.includes( "Recovered")));
       const filteredStatusDeceased = result.filter(obj => (obj.status.includes( "Deceased")));

      let result_CRD ;
      let daylabels = [];
      let ansC = [];

      //filtering confirmed day values
      for(let i = 0; i < filteredStatusConfirmed.length; i++){
        let sum = 0;
      for (const [key, value] of Object.entries(filteredStatusConfirmed[i])) {
        if(!(key.includes("status")) && !(key.includes("date")) && !(key.includes("dateymd"))){
            sum += parseInt(value)          
          //  console.log(`${key}: ${value}`);
        }
      }
      daylabels.push(filteredStatusConfirmed[i].date);
      ansC.push(sum);
    }
    console.log(ansC);

    //filtering recovered day values
    let ansR = [];
    for(let i = 0; i < filteredStatusRecovered.length; i++){
      let sum = 0;
    for (const [key, value] of Object.entries(filteredStatusRecovered[i])) {     
      if(!(key.includes("status")) && !(key.includes("date")) && !(key.includes("dateymd"))){
          sum += parseInt(value)          
      }
    }
    ansR.push(sum);
  }
  console.log(ansR);

    //filtering deceased day values
  let ansD = [];
  for(let i = 0; i < filteredStatusDeceased.length; i++){
    let sum = 0;
  for (const [key, value] of Object.entries(filteredStatusDeceased[i])) {     
    if(!(key.includes("status")) && !(key.includes("date")) && !(key.includes("dateymd"))){
        sum += parseInt(value)          
      //  console.log(`${key}: ${value}`);
    }
  }
  ansD.push(sum);
}
console.log(ansD);
   let C = ansC.slice(-7);
   let R = ansR.slice(-7);
   let D = ansD.slice(-7)
   let L = daylabels.slice(-7);

  result_CRD = {C,R,D,L};


      setStatesDaily(result_CRD);
      
      console.log(statesDaily)


    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  });

  return <>
      <section className='lineChart'>
        <LineChartData statesDaily={statesDaily} />
    </section></>;
};
export default StateDaily;