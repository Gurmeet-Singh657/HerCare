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

const options = [
  [
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
  ],
];

const Indiastates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Jammu and Kashmir",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, typesofassaultopt, theme) {
  return {
    fontWeight:
      typesofassaultopt.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Showincidentsshared() {
  const { typesofassault, setTypesofassault, city, setCity, state, setState } =
    useContext(SearchContext);

  const { data, loading, reFetch } = useFetch(
    `/getAllIncidents?typesofassault=${typesofassault}&city=${city}&state=${state}`
  );

  const [typeofassault, setTypeofassault] = useState([]);
  const [cities, setCities] = useState("");
  const [states, setStates] = useState("");

  const handleIncidentSearch = () => {
    // reFetch();
    console.log(data);
    setTypesofassault(typeofassault);
    setCity(cities);
    setState(state);
  };
  const handleIncidentClear = () => {
    setTypesofassault([]);
    setTypeofassault([]);
    setCity("");
    setCities("");
    setState("");
    setStates("");
    // reFetch();
  };
  const handleCity = (event) => {
    setCities(event.target.value);
  };
  const handleState = (event) => {
    setStates(event.target.value);
  };
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
      {/* multi select */}
      <FormControl sx={{ marginBottom: 3, width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">Types of Assault</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={typeofassault}
          onChange={handleChange}
          input={
            <OutlinedInput id="select-multiple-chip" label="Types of Assault" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  clickable
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                  onDelete={(e) => handleDelete(e, value)}
                  onClick={() => console.log("clicked chip")}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options[0].map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, typeofassault, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* // pehla single // "Show Incidents From" // "Time of the day" */}
      {/* <Box sx={{ marginBottom: 3, width: "100%" }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        City
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cities}
                        label="City"
                        onChange={handleCity}
                    >
                        {options[1].map((option) => {
                            return <MenuItem value={option}>{option}</MenuItem>;
                        })}
                    </Select>
                </FormControl>
            </Box> */}
      <Citydropdown />
      {/* <Box sx={{ marginBottom: 3, width: "100%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={states}
            label="State"
            onChange={handleState}
          >
            {Indiastates.map((option) => {
              return <MenuItem value={option}>{option}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box> */}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Indiastates}
        sx={{ marginBottom: 3, width: "100%" }}
        renderInput={(params) => <TextField {...params} label="States" />}
      />
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
