import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenreChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'jQuery', 'Node', 'Angular', 'JavaScript'];
  const colors = ['#567D89', '#A16856', '#DEC584', '#E0A370', '#709F9D'];

  const getData = () => {
    const data = genres.map(genre => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      };
    })
    return data;
  };


  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#567D89"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );

}

export default EventGenreChart;