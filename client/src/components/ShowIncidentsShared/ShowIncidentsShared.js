import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";
import _without from "lodash/without";
import { MouseEvent } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import "./ShowIncidentsShared.css";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Citydropdown from "../citydropdown/Citydropdown.js";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Stack from "@mui/material/Stack";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const options = [
  "Rape/Sexual Assault",
  "Chain Snatching/Robbery",
  "Domestic Violence",
  "Physical Assault",
  "Stalking",
  "Ogling/Facial Expressions/Staring",
  "Taking photos without permission",
  "Indecent Exposure/Masturbation in public",
  "Touching /Groping",
  "Showing Pornography without consent",
  "Commenting/Sexual Invites",
  "Online Harassment",
  "Human Trafficking",
];
const timeshow=[
  "All time",
  "Today",
  "This Week",
  "This Month",
  "This Year"
]


export default function Showincidentsshared() {
  const { typesofassault, setTypesofassault, locations, setLocations, showIncidentsfrom, setShowIncidentsfrom } =
  useContext(SearchContext);
  
  const { data, loading, reFetch } = useFetch(
    `/getAllIncidents?typesofassault=${typesofassault}&locations=${locations}&showIncidentsfrom=${showIncidentsfrom}`
    );
    
    const [typeofassault, setTypeofassault] = useState([]);
    const [location, setLocation] = useState("");
    const [showIncidentfrom, setShowIncidentfrom] = useState("All time");
    
    const handleIncidentSearch = () => {
      // reFetch();
      console.log(data);
      setTypesofassault(typeofassault);
      setLocations(location);
      setShowIncidentsfrom(showIncidentfrom);
    };
    const handleIncidentClear = () => {
      setTypesofassault([]);
    setTypeofassault([]);
    setLocation("");
    setLocations("");
    setShowIncidentfrom("All time");
    setShowIncidentsfrom("All time");
    // reFetch();
  };
  // const handleLocations = (event) => {
  //   setCities(event.target.value);
  // };
  const theme = useTheme();
  
  const handleChange = (event) => {
    // console.log(event);
    const {
      target: { value },
    } = event;
    setTypeofassault(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
      );
      console.log(typeofassault[0] + " " + typeofassault[1]);
    };
    const handleDelete = (e: MouseEvent, value: string) => {
      e.preventDefault();
      console.log("clicked delete");
      setTypeofassault((current) => _without(current, value));
    };
    
    return (
      <div className="incidentfiltering">
      <div className="typeofassaultdrop">
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={options}
          disableCloseOnSelect
          getOptionLabel={(option) => option}
          onChange={(event,value)=>setTypeofassault(value)}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
                />
              {option}
            </li>
          )}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Type of Violence" />
            )}
            />
      </div>
      <Citydropdown />
      <div className="incidentbtns">
        <button className="searchincidents" onClick={handleIncidentSearch}>
          Search&nbsp;
          <SearchIcon />
        </button>
        <button className="deleteincidents" onClick={handleIncidentClear}>
          Clear&nbsp;
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

// const Indiastates = [
//   "Andaman and Nicobar Islands",
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chandigarh",
//   "Chhattisgarh",
//   "Dadra and Nagar Haveli",
//   "Daman and Diu",
//   "Delhi",
//   "Goa",
//   "Jammu and Kashmir",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Ladakh",
//   "Lakshadweep",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Puducherry",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
// ];