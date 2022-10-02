import "./Chart.css";
import {
  Cell,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Label } from "recharts";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { useState } from "react";

const StateChart = ({ aspect, title }) => {
  // const COLORS = ['#0088FE', 'hsla(0, 100%, 90%, 0.3)', 'rgba(255, 0, 0, 0.6)', '#ac88c3', '#93c0d3','#efc2d6','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600'];
  const { data, loading, reFetch } = useFetch("/getIncidentFormData");
  let StateData = [];
  const map = new Map([
    ["Andaman and Nicobar Islands", 0],
    ["Andhra Pradesh", 0],
    ["Arunachal Pradesh", 0],
    ["Assam", 0],
    ["Bihar", 0],
    ["Chandigarh", 0],
    ["Chhattisgarh", 0],
    ["Dadra and Nagar Haveli", 0],
    ["Daman and Diu"],
    ["Delhi", 0],
    ["Goa", 0],
    ["Jammu and Kashmir", 0],
    ["Gujarat", 0],
    ["Haryana", 0],
    ["Himachal Pradesh", 0],
    ["Jharkhand", 0],
    ["Karnataka", 0],
    ["Kerala", 0],
    ["Ladakh", 0],
    ["Madhya Pradesh", 0],
    ["Maharashtra", 0],
    ["Manipur", 0],
    ["Meghalaya", 0],
    ["Mizoram", 0],
    ["Nagaland", 0],
    ["Odisha", 0],
    ["Puducherry", 0],
    ["Punjab", 0],
    ["Rajasthan", 0],
    ["Sikkim", 0],
    ["Tamil Nadu", 0],
    ["Telangana", 0],
    ["Tripura", 0],
    ["Uttar Pradesh", 0],
    ["Uttarakhand", 0],
    ["Bengal", 0],
  ]);
  for (let i = 0; i < data.length; ++i) {
    map.set(data[i].address.state, map.get(data[i].address.state) + 1);
  }

  //   const StateData = [{
  //     id: 1,
  //     name: "Delhi",
  //     noOfCases: 30
  //   },
  //   {
  //     id: 2,
  //     name: "Haryana",
  //     noOfCases: 50
  //   },
  //   {
  //     id: 3,
  //     name: "Punjab",
  //     noOfCases: 80
  //   }
  // ]
  console.log(StateData);
  let idx = 0;
  for (let [key, value] of map.entries()) {
    // console.log(key + " " + value)
    const obj = {
      name: key,
      value: value,
    };
    idx = idx + 1;
    StateData.push(obj);
  }
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#0088FE",
    "hsla(0, 100%, 90%, 0.3)",
    "rgba(255, 0, 0, 0.6)",
    "#ac88c3",
    "#93c0d3",
    "#efc2d6",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "#ffa600",
  ];

  const Bullet = ({ backgroundColor, size }) => {
    return (
      <div
        className="CirecleBullet"
        style={{
          backgroundColor,
          width: size,
          height: size,
        }}
      ></div>
    );
  };

  const CustomizedLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="LegendList">
        {payload.map((entry, index) => (
          <li key={`item-${index}`}>
            <div className="BulletLabel">
              <Bullet backgroundColor={entry.payload.fill} size="10px" />
              <div className="BulletLabelText">{entry.value}</div>
            </div>
            <div style={{ marginLeft: "20px" }}>{entry.payload.value}</div>
          </li>
        ))}
      </ul>
    );
  };

  const CustomLabel = ({ viewBox, labelText, value }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx}
          y={cy}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontSize="15"
        >
          {labelText}
        </text>
        <text
          x={cx}
          y={cy + 20}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fill="#0088FE"
          fontSize="26"
          fontWeight="600"
        >
          {value}
        </text>
      </g>
    );
  };

  return (
    <>
      {/* <div className="statecharttitle">StateWise Analytics P</div> */}
      <div style={{ width: "100%", height: 420 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={StateData}
              dataKey="value"
              cx={800}
              cy={200}
              innerRadius={100}
              outerRadius={200}
            >
              {StateData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                content={
                  <CustomLabel labelText="StateWise Analytics" value={36} />
                }
                position="center"
              />
            </Pie>
            <Legend content={<CustomizedLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default StateChart;