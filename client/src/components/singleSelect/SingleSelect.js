import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const options = [
  [
    "Rape/Sexual Assault",
    "Chain Snatching/Robbery",
    "Domestic Violence",
    "Physical assault",
    "Stalking",
    "Ogling/Facial Expressions/Staring",
    "Taking photos without permission",
    "Indecent Exposure/Masturbation in public",
    "Touching /Groping",
    "Showing Pornography without consent",
    "Commenting/Sexual Invites",
    "Online Harassment",
    "Human Trafficking",
    "Others",
  ],
  ["All time", "Today", "This Week", "This Month", "This Year"],
  ["Morning", "Afternoon", "Evening", "Night", "Post Mid Night"],
];

const SingleSelect = ({ index, heading }) => {
  const [incident, setIncident] = React.useState("");

  const handleChange = (event) => {
    setIncident(event.target.value);
  };
  return (
    <div>
      <Box sx={{ marginBottom: 3, width: "400px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{heading}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={incident}
            label={heading}
            onChange={handleChange}
          >
            {options[index].map((option) => {
              return <MenuItem value={option}>{option}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SingleSelect;
