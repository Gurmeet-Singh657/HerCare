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
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import "./ShowSafetyTipsShared.css";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Citydropdown from "../citydropdown/Citydropdown.js";
import { SafetyTipsContext } from "../../context/SafetyTipsContext";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const timeshow = ["All time", "Today", "This Week", "This Month", "This Year"];
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

const useStyles = makeStyles((theme) => ({
    root: {
        whiteSpace: "unset",
        wordBreak: "break-all"
    },
}));

export default function Showincidentsshared() {
    const {
        locationsst,
        setLocationsst,
        showsafetyTipsfrom,
        setShowsafetyTipsfrom
    } = useContext(SafetyTipsContext);

    const { data, loading, reFetch } = useFetch(
        `/getAllSafetyTips?locationsst=${locationsst}&showsafetyTipsfrom=${showsafetyTipsfrom}`
    );
    const [locationst, setLocationst] = useState("");
    const [showsafetyTipfrom, setShowsafetyTipfrom] = useState("All time");

    const handleSafetyTipsSearch = () => {
        console.log(data);
        setLocationsst(locationst);
        setShowsafetyTipsfrom(showsafetyTipfrom);
    };
    const handleSafetyTipsClear = () => {
        console.log()
        setLocationst("");
        setLocationsst("");
        setShowsafetyTipsfrom("All time");
        setShowsafetyTipfrom("All time");
    };
    const handleshowSafetyTipswithin = (event) => {
        setShowsafetyTipfrom(event.target.value);
    };
    const handleLocation = (event) => {
        setLocationst(event.target.value);
    };
    const classes = useStyles();
    return (
        <div className="SafetyTipsfiltering">
            <div className="IndianStatesdropst">
                <Box>
                    <FormControl fullWidth sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-simple-select-label">
                            Select Indian State
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={locationst}
                            label="Select Indian State"
                            onChange={handleLocation}
                        >
                            {Indiastates.map((state) => {
                                return <MenuItem value={state}>{state}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="showSafetyTipswithin">
                <Box>
                    <FormControl fullWidth sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-simple-select-label">
                            Show SafetyTips Within
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={showsafetyTipfrom}
                            label="Show Safety Tips Within"
                            onChange={handleshowSafetyTipswithin}
                        >
                            {timeshow.map((time) => {
                                return <MenuItem value={time}>{time}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="SafetyTipsbtns">
                <button className="searchSafetyTips" onClick={handleSafetyTipsSearch}>
                    Search&nbsp;
                    <SearchIcon />
                </button>
                <button className="deleteSafetyTips" onClick={handleSafetyTipsClear}>
                    Clear&nbsp;
                    <DeleteIcon />
                </button>
            </div>
        </div>
    );
}