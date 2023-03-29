import React from "react"
import { PieChart, Pie, Legend, Tooltip, Cell, Label, LabelList} from 'recharts';
const COLORS = ['#0088FE', '#24a915', '#787473'];

function DonutChartData({totalStates}){
   console.log(totalStates);
   
   // Multiplying pie chart -> active value with 20 and deaths with 15
   // why -> to make doughnut pie chart look pretty
   const data = [
    { name: 'Active', value: 20*totalStates.active  },
    { name: 'Recovered', value: totalStates.recovered },
    { name: 'Deaths', value: 15*totalStates.deaths },
  ];
    
     return(
        <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
     
        }}
      >
<PieChart width={400} height={300} >
        <Pie
          data={data}
          cx={140}
          cy={140}
          innerRadius={60}
          outerRadius={107}
          paddingAngle={3}
          dataKey="value"
        >
    <Label 
       value={`${totalStates.confirmed}`} position="centerBottom"  className='label-top' fontSize='27px'
       />
       <Label 
       value="Confirmed" position="centerTop" className='label'
       />
       <LabelList dataKey="name" position="top" color="#238e3f" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'black' }}/>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
</PieChart>
</div>

     );
}

export default DonutChartData;
