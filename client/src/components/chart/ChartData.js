import { useState } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
// import { UserData } from '../../Data';
import useFetch from '../../hooks/useFetch.js'
function ChartData() {
  const {data,loading,reFetch} = useFetch('/getIncidentFormData')
  const StateData = []
  const Indiastates = new Map([
    ["Andaman and Nicobar Islands",0],
    ["Andhra Pradesh", 0],
    ["Arunachal Pradesh",0],
    ["Assam",0],
    ["Bihar",0],
    ["Chandigarh",0],
    ["Chhattisgarh",0],
    ["Dadra and Nagar Haveli",0],
    ["Daman and Diu",0],
    ["Delhi",0],
    ["Goa",0],
    ["Jammu and Kashmir",0],
    ["Gujarat",0],
    ["Haryana",0],
    ["Himachal Pradesh",0],
    ["Jharkhand",0],
    ["Karnataka",0],
    ["Kerala",0],
    ["Ladakh",0],
    ["Madhya Pradesh",0],
    ["Maharashtra",0],
    ["Manipur",0],
    ["Meghalaya",0],
    ["Mizoram",0],
    ["Nagaland",0],
    ["Odisha",0],
    ["Puducherry",0],
    ["Punjab",0],
    ["Rajasthan",0],
    ["Sikkim",0],
    ["Tamil Nadu",0],
    ["Telangana",0],
    ["Tripura",0],
    ["Uttar Pradesh",0],
    ["Uttarakhand",0],
    ["Bengal",0]
  ]);
  for(let i=0; i<data.length; ++i){
    Indiastates.set(data[i].address.state, Indiastates.get(data[i].address.state)+1)
  } 
  let idx = 0;
 for (let [key, value] of  Indiastates.entries()) {
  // console.log(key + " " + value)
   const obj = {
     id: idx,
     name: key,
     noOfCases: parseFloat(value)
    }
    idx = idx+1;
    //  console.log(obj)
    StateData.push(obj)
  }
  // console.log(StateData);

  // const UserData = stateData;

  const [stateData, setStateData] = useState({
    labels: StateData.map((state) => state.name),
    datasets: [
      {
        label: "State Data",
        data: StateData.map((state) => state.noOfCases),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  
  // console.log(stateData);

   return (
     <div>
      {/* <div style={{ width: 700, height:100}}>
        <PieChart chartData={stateData} />
      </div> */}
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default ChartData;