import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid, ResponsiveContainer } from 'recharts';



export const BarGraph = (props) => {

const Monthdata = [
  { name: 'Jan', expenses: 0, color: '#9ADCFF' },
  { name: 'Feb', expenses: 0, color: '#F7E9A0' },
  { name: 'Mar', expenses: 0, color: '#FF6962' },
  { name: 'Apr', expenses: 0, color: '#B08BBB' },
  { name: 'May', expenses: 0, color: '#9BD2CF' },
  { name: 'June', expenses: 0, color: '#9ADCFF' },
  { name: 'July', expenses: 0, color: '#F7E9A0' },
  { name: 'Aug', expenses: 0, color: '#FF6962' },
  { name: 'Sept', expenses: 0, color: '#B08BBB' },
  { name: 'Oct', expenses: 0, color: '#9BD2CF' },
  { name: 'Nov', expenses: 0, color: '#9ADCFF' },
  { name: 'Dec', expenses: 0, color: '#9ADCFF' },
];
  const updatedMonthData = [...Monthdata]; // Create a copy of the Monthdata array
  
  const exp = props?.val[0]?.paymentHistory;
  
  if (props.val) {
    exp?.forEach((item) => {
      const date = new Date(item.date);
      const month = date.getMonth();
      console.log(item);
      updatedMonthData[month].expenses += item.payment;
    });
  }

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const data = updatedMonthData.slice(currentMonth - 5, currentMonth + 1);
  


  return (
    <div style={{ width:  "100%" , height: "100%" }}>
    <ResponsiveContainer width='100%' height="100%">
    <BarChart data={data} margin={{ bottom: 10, top:10 }} >
      <XAxis dataKey="name" interval={0} tick={{ fontSize: 14,color :"#EFEFEF",fontWeight:500}} />
      <YAxis domain={[10, 50]} tick={{ fontSize: 15,color :"#EFEFEF",fontWeight:500}}  ticks={[10000, 20000, 30000, 40000, 50000]} tickFormatter={(tick) => `${tick / 1000}K`}  axisLine={false}/>
      <CartesianGrid horizontal={true} vertical={false} stroke="#EFEFEF" />
      <Tooltip cursor={{fill: 'transparent'}} />
      <Bar dataKey="expenses" barSize={100} radius={[15, 15, 0, 0]} >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

