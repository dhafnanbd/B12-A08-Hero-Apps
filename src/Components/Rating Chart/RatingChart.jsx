import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ ratings }) => {
  const data = ratings;
  return (
    <ResponsiveContainer
      className="outline-0 focus:outline-0"
      width="100%"
      height={250}
    >
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        barCategoryGap="5"
      >
        <XAxis type="number" allowDecimals={false} />
        <YAxis dataKey="name" type="category" />
        <Bar dataKey="count" fill="#FF8811" barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingChart;
