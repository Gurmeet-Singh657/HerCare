import "./Chart.css"
import {Cell, BarChart, Bar,PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
// const data = [
//     { name: "January", Total: 1200 },
//     { name: "February", Total: 2100 },
//     { name: "March", Total: 800 },
//     { name: "April", Total: 1600 },
//     { name: "May", Total: 900 },
//     { name: "June", Total: 1700 }
// ]

const ViolenceChart = ({ aspect, title }) => {
  const COLORS = ['#0088FE', 'hsla(0, 100%, 90%, 0.3)', 'rgba(255, 0, 0, 0.6)', '#ac88c3', '#93c0d3','#efc2d6','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600'];
  const {data,loading,reFetch} = useFetch('/getIncidentFormData')
  const ViolenceData = []
  const Violence= new Map([
    // ["Andaman and Nicobar Islands",1],
    // ["Andhra Pradesh", 1],
    // ["Arunachal Pradesh",1],
    // ["Assam",1],
    // ["Bihar",1],
    // ["Chandigarh",1],
    // ["Chhattisgarh",1],
    // ["Dadra and Nagar Haveli",1],
    // ["Daman and Diu",1],
    // ["Delhi",1],
    // ["Goa",1],
    // ["Jammu and Kashmir",1],
    // ["Gujarat",1],
    // ["Haryana",1],
    // ["Himachal Pradesh",1],
    // ["Jharkhand",1],
    // ["Karnataka",1],
    // ["Kerala",1],
    // ["Ladakh",1],
    // ["Madhya Pradesh",1],
    // ["Maharashtra",1],
    // ["Manipur",1],
    // ["Meghalaya",1],
    // ["Mizoram",1],
    // ["Nagaland",1],
    // ["Odisha",1],
    // ["Puducherry",1],
    // ["Punjab",1],
    // ["Rajasthan",1],
    // ["Sikkim",1],
    // ["Tamil Nadu",1],
    // ["Telangana",100],
    // ["Tripura",100],
    // ["Uttar Pradesh",100],
    // ["Uttarakhand",100],
    // ["Bengal",100]
    ["Physical Assault",0],
    ["Rape/Sexual Assault",0],
    ["Chain Snatching/Robbery",0],
    ["Domestic Violence",0],
    ["Stalking",0],
    ["Ogling/Facial Expressions/Staring",0],
    ["Taking photos without permission",0],
    ["Indecent Exposure/Masturbation in public",0],
    ["Touching /Groping",0],
    ["Showing Pornography without consent",0],
    ["Commenting/Sexual Invites",0],  
    ["Online Harassment",0],
    ["Human Trafficking",0]
  ]);
  for(let i=0; i<data.length; ++i){
    Violence.set(data[i].typeOfViolence, Violence.get(data[i].typeOfViolence)+1)
  } 
  let idx = 0;
 for (let [key, value] of  Violence.entries()) {
  // console.log(key + " " + value)
   const obj = {
     id: idx,
     name: key,
     noOfCases: value
    }
    idx = idx+1;
    ViolenceData.push(obj)
  }
  // console.log(StateData)
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <BarChart width={200} height={200} data={ViolenceData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="id" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="2 2" className="chartGrid" />
                    <Tooltip />
                    <Bar type="monotone" dataKey="noOfCases" stroke="#8884d8" fillOpacity={1} fill="url(#noOfCases)">

                      {
            data.map((name, id) => <Cell fill={COLORS[id % COLORS.length]}/>)
          }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ViolenceChart