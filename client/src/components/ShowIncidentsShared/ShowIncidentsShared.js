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
import ListItemText from "@mui/material/ListItemText";

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
const timeshow = ["All time", "Today", "This Week", "This Month", "This Year"];

export default function Showincidentsshared() {
  const {
    typesofassault,
    setTypesofassault,
    locations,
    setLocations,
    showIncidentsWithin,
    setShowIncidentsWithin,
  } = useContext(SearchContext);

  const { data, loading, reFetch } = useFetch(
    `/getAllIncidents?typesofassault=${typesofassault}&locations=${locations}&showIncidentsWithin=${showIncidentsWithin}`
  );

  const [typeofassault, setTypeofassault] = useState([]);
  const [location, setLocation] = useState("");
  const [showIncidentWithin, setShowIncidentWithin] = useState("All time");

  const handleIncidentSearch = () => {
    setTypesofassault(typeofassault);
    setLocations(location);
    setShowIncidentsWithin(showIncidentWithin);
  };
  const handleIncidentClear = () => {
    setTypesofassault([]);
    setTypeofassault([]);
    setLocation("");
    setLocations("");
    setShowIncidentWithin("All");
    setShowIncidentsWithin("All");
  };

  const handleshowincidentwithin = (event) => {
    setShowIncidentWithin(event.target.value);
  };
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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTypeofassault(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="incidentfiltering">
      <div className="typeofassaultdrop">
        <FormControl
          className="typeofassaultdrop"
          sx={{ marginBottom: 3, width: "100%" }}
        >
          <InputLabel id="demo-multiple-chip-label">
            Types of Assault
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={typeofassault}
            onChange={handleChange}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Types of Assault"
              />
            }
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
      </div>
      <Citydropdown />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            placeholder="Show Incidents Within"
          >
            Show Incidents Within
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={showIncidentWithin}
            label="Show Incidents Within"
            onChange={handleshowincidentwithin}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="This Week">This Week</MenuItem>
            <MenuItem value="This Month">This Month</MenuItem>
            <MenuItem value="Last 3 Months">Last 3 Months</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
