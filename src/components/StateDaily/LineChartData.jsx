import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };


function LineChartData({statesDaily}){
    console.log(statesDaily);

    const labels = statesDaily.L;
    const C =statesDaily.C;
    const R =statesDaily.R;
    const D =statesDaily.D;

    const data = {
        labels,
        datasets: [
          {
            label: 'Confirmed',
            data: C,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Recovered',
            data: R,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Deceased',
            data: D,
            borderColor: 'rgb(53, 235, 62)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

     
      return(
         <div className=''
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40vh',
            
            width: '80vh',
            
          }}
       >
          <Line options={options} data={data} />

 </div>
 
      );
 }
 
 export default LineChartData;