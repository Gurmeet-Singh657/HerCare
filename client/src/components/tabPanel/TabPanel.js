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
import { useContext } from "react"
import useFetch from "../../hooks/useFetch";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import {citydata} from './citydata.js'

const option = [
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
  ["All time", "Today", "This Week", "This Month", "This Year"],
  ["Whole day", "Morning", "Afternoon", "Evening", "Night", "Post Mid Night"],
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


export default function BasicTabs() {


  const options = {
    method: 'GET',
    url: 'https://referential.p.rapidapi.com/v1/city',
    params: {
      fields: 'iso_a2,state_code,state_hasc,timezone,timezone_offset',
      iso_a2: 'in',
      lang: 'en',
      prefix: 'san fr'
    },
    headers: {
      'X-RapidAPI-Key': '245c26abd2msh97f65f07ee8789fp1dd551jsne22ae7a6c008',
      'X-RapidAPI-Host': 'referential.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  // const { typesofassault, setTypesofassault, showIncidentfrom, setShowIncidentfrom, timeoftheday, settimeoftheday } = useContext(SearchContext);
  const { typesofassault, setTypesofassault, city, setCity, state, setState } = useContext(SearchContext);

  // const { data, loading, reFetch } = useFetch(`/getAllIncidents?typesofassault=${typesofassault}&showIncidentfrom=${showIncidentfrom}&timeoftheday=${timeoftheday}`);
  const { data, loading, reFetch } = useFetch(`/getAllIncidents?typesofassault=${typesofassault}&city=${city}&state=${state}`);

  const handleSearch = () => {
    reFetch();
    console.log(data);
  };

  // const handleshowIncident = (event) => {
  //   setShowIncidentfrom(event.target.value);
  //   // console.log(showIncidentfrom);
  // }
  // const handleTimeOfTheDay = (event) => {
  //   settimeoftheday(event.target.value);
  // }
  const handleCity = (event) => {
    setCity(event.target.value);
  }
  const handleState = (event) => {
    setState(event.target.value);
  }



  const theme = useTheme();
  
  const handleChange = (event) => {
    // console.log(event);
    const {
      target: { value },
    } = event;
    setTypesofassault(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(typesofassault[0] + " " + typesofassault[1]);
    // console.log(current);
    // setTypesofassault(typesofassaultValue);
    // console.log(typesofassault);
    // console.log(showIncidentfrom);
    // console.log(timeoftheday);
    // console.log(typesofassaultValue);
  };
  const handleDelete = (e: MouseEvent, value: string) => {
    e.preventDefault();
    console.log("clicked delete");
    setTypesofassault((current) => _without(current, value));

  };

  return (
    <div className="tabpanels">
      {/* multi select */}
      <FormControl sx={{ marginBottom: 3, width: "400px" }}>
        <InputLabel required={true} id="demo-multiple-chip-label">
          Types of Assault
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={typesofassault}
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
          {option[0].map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, typesofassault, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* // pehla single // "Show Incidents From" // "Time of the day" */}
      <Box sx={{ marginBottom: 3, width: "400px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            City
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            label="City"
            onChange={handleCity}
          >
            {option[1].map((option) => {
              return <MenuItem value={option}>{option}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>

      {/* second   singleselect */}
      {/* <Box sx={{ marginBottom: 3, width: "400px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label="State"
            onChange={handleState}
          >
            {option[2].map((option) => {
              return <MenuItem value={option}>{option}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box> */}

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        option={option[2]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <button className="searchincidents" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
