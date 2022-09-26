import * as React from "react";
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

function getStyles(name, typesofassaultopt, theme) {
  return {
    fontWeight:
      typesofassaultopt.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({ index, heading }) {
  const theme = useTheme();
  const [typesofassaultopt, settypesofassaultopt] = React.useState([]);
  const current = React.useContext(SearchContext);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      settypesofassaultopt(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
      current.typesofassault = typesofassaultopt;
      // console.log(current);
      // console.log(current.typesofassault);
    };
  const handleDelete = (e: MouseEvent, value: string) => {
    e.preventDefault();
    console.log("clicked delete");
    settypesofassaultopt((current) => _without(current, value));
    current.typesofassault = typesofassaultopt;
  };
  return (
    <div>
      <FormControl sx={{ marginBottom: 3, width: "400px" }}>
        <InputLabel required={true} id="demo-multiple-chip-label">
          {heading}
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={typesofassaultopt}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={heading} />}
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
          {options[index].map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, typesofassaultopt, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
