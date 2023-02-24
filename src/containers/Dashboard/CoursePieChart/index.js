import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

import "./coursePieChart.css";

export function PieRechartComponent({userTaskDetails, type}) {
    const COLORS = ['#00C49F', '#6495ed', '#FFBB28'];

    // const RADIAN = Math.PI / 180;

    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
    //     return (
    //       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //         {`${(percent * 100).toFixed(0)}%`}
    //       </text>
    //     );
    // };
   
    return (
        <PieChart width={730} height={300} className="coursePieChart">
            <Pie data={userTaskDetails} color="#000000" dataKey="count" nameKey="status" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                {
                    userTaskDetails.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
}