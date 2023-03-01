import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { PieChart, Pie, Sector, Cell } from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data1 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className="flex items-center gap-5 w-full p-3">
        {/* ///////////////////// */}
        <div className="w-96 bg-white h-96 relative flex  flex-col  rounded overflow-hidden">
          <div className="border-b bg-gray h-12 flex items-center px-2">
            <h6>Store Visits by Source</h6>
          </div>
          <div className="w-full  mt-10">
            <ResponsiveContainer width="100%" aspect={3 / 2}>
              <PieChart width={300} height={300}>
                <Pie
                  data={data1}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data1.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 place-items-center gap-2 text-sm mt-10">
            <p className="flex items-center gap-2">
              <div
                className="w-3 h-3  rounded  bg-yellow-400"
                style={{ backgroundColor: "#0088FE" }}
              ></div>
              Total Order
            </p>
            <p className="flex items-center gap-2">
              <div
                className="w-3 h-3  rounded  bg-green-400"
                style={{ backgroundColor: "#00C49F" }}
              ></div>
              Total Earning
            </p>
            <p className="flex items-center gap-2">
              <div
                className="w-3 h-3  rounded  bg-orenge"
                style={{ backgroundColor: "#FFBB28" }}
              ></div>
              Total Return
            </p>
            <p className="flex items-center gap-2">
              <div
                className="w-3 h-3  rounded  bg-yellow-400"
                style={{ backgroundColor: "#FF8042" }}
              ></div>
              Total Repair
            </p>
          </div>
        </div>







        {/* //////////////////////////////// */}
        <div className="w-full bg-white relative flex flex-col  rounded overflow-hidden items-center h-96">
          <div className=" w-full h-12 border-gary border-b  flex items-center px-2">
            <h6>Store Visits by Source</h6>
          </div>
          <div className="w-full mt-3  p-2">
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Chart;
