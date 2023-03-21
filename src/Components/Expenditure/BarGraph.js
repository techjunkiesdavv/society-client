import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', expenses: 15000, color: '#03A2DF' },
  { name: 'Feb', expenses: 25000, color: '#FFC602' },
  { name: 'Mar', expenses: 35000, color: '#F25D3B' },
  { name: 'Apr', expenses: 43000, color: '#C5CAFF' },
  { name: 'May', expenses: 48000, color: '#79DB74' },
];

export const BarGraph = () => {
  return (
    <div style={{ width:  "100%" , height: "100%" }}>
    <ResponsiveContainer width='100%' height="100%">
    <BarChart data={data} margin={{ bottom: 10, top:10 }} >
      <XAxis dataKey="name" interval={0} tick={{ fontSize: 12 }} />
      <YAxis domain={[10, 50]} tick={{ fontSize: 12 }}  ticks={[10000, 20000, 30000, 40000, 50000]} tickFormatter={(tick) => `${tick / 1000}K`}  axisLine={false}/>
      <CartesianGrid horizontal={true} vertical={false} stroke="#9E9B9B" />
      <Tooltip cursor={{fill: 'transparent'}} />
      <Bar dataKey="expenses" barSize={100} radius={[15, 15, 0, 0]}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

