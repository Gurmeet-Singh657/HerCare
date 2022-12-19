import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
    ResponsiveContainer,
} from 'recharts';

import useFetch from "../../hooks/useFetch";
import "./Chart.css"

const XYChart = ({ aspect, title }) => {
    const { data, loading, reFetch } = useFetch("https://hercare-0nh9.onrender.com/getIncidentFormData");
    console.log(data);
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
        ["Daman and Diu", 0],
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

    console.log(StateData);
    let idx = 0;
    for (let [key, value] of map.entries()) {
        const obj = {
            name: key,
            value: value,
        };
        idx = idx + 1;
        if (obj.value > 0)
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
    return (
        <>
            <div className="XYChartheader">State Wise Analysis</div>
            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        layout="vertical"
                        width={500}
                        height={400}
                        data={StateData}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" scale="band" width={120} />
                        <Tooltip />
                        <Bar dataKey="value" barSize={20} fill={COLORS[1]}>
                            {
                                StateData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))
                            }
                        </Bar>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default XYChart;