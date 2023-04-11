import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'January', expenses: 15000, color: '#9ADCFF' },
  { name: 'February', expenses: 25000, color: '#F7E9A0' },
  { name: 'March', expenses: 35000, color: '#FF6962' },
  { name: 'April', expenses: 43000, color: '#B08BBB' },
  { name: 'May', expenses: 48000, color: '#9BD2CF' },
];

export const BarGraph = () => {
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

