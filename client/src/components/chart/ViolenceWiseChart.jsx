import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import "./Chart.css"
import useFetch from "../../hooks/useFetch";
const COLORS = [
    "#1430B8",
    "#FD4D0C",
    "#448D76",
    "#FCBA12",
    "#B814B2",
    "#341109",
    "#66B032",
    "#00C49F",
    "#8601AF",
    "#FD3A0F",
    "#7CCD7C",
    "#6495ED",
    "#CDB79E",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
export default function ViolenceWiseChart() {
    const { data, loading, reFetch } = useFetch('https://hercare-0nh9.onrender.com/getIncidentFormData')
    const ViolenceData = []
    const Violence = new Map([
        ["Physical Assault", 0],
        ["Rape/Sexual Assault", 0],
        ["Chain Snatching/Robbery", 0],
        ["Domestic Violence", 0],
        ["Stalking", 0],
        ["Ogling/Facial Expressions/Staring", 0],
        ["Taking photos without permission", 0],
        ["Indecent Exposure/Masturbation in public", 0],
        ["Touching /Groping", 0],
        ["Showing Pornography without consent", 0],
        ["Commenting/Sexual Invites", 0],
        ["Online Harrasment", 0],
        ["Human Trafficking", 0]
    ]);
    for (let i = 0; i < data.length; ++i) {
        Violence.set(data[i].typeOfViolence, Violence.get(data[i].typeOfViolence) + 1)
    }
    let idx = 0;
    for (let [key, value] of Violence.entries()) {
        const obj = {
            id: idx,
            name: key,
            noOfCases: value
        }
        idx = idx + 1;
        ViolenceData.push(obj)
    }
    return (
        <div className='ViolenceWiseChartanaly'>
            <div className="Violenceanaly">
                <div className="Violenceanlyheade">Violence Wise Analytics</div>
            </div>
            <div className="violencegraphanddisplay">

                <div className="Violencegraph">
                    <PieChart width={280} height={300}>
                        <Pie
                            data={ViolenceData}
                            outerRadius={140}
                            innerRadius={100}
                            // fill="#8884d8"
                            dataKey="noOfCases"
                        >
                            {ViolenceData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="ViolenceTable">
                    {ViolenceData.map((entry, index) => (
                        <>
                            {
                                <div className="violencedetails">
                                    <div key={index} style={{ backgroundColor: COLORS[index % COLORS.length] }} className="violencetableheader">{entry.name}&nbsp;&nbsp;
                                    </div>
                                    <div key={index} className="violencetablenum">{entry.noOfCases}</div>
                                </div>
                            }
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}