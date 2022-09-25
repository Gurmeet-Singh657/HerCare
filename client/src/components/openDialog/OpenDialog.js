import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
import TabPanel from "../tabPanel/TabPanel.js";
import { SearchContext } from "../../context/SearchContext";
import { useContext, useState } from "react";

const OpenDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const OpenDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

OpenDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ openfilter, setOpenFilter }) {
  const handleClose = () => {
    setOpenFilter(false);
  };
  const [typesofassault, setTypesofassault] = useState([]);
  const [timeOfTheDay, setTimeOfTheDay] = useState("");
  const [showIncidentsfrom, setShowIncidentsfrom] = useState("");
  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    console.log(typesofassault);
    setOpenFilter(false);
    dispatch({
      type: "NEW_SEARCH",
      payload: { typesofassault, showIncidentsfrom, timeOfTheDay },
    });
    // navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div>
      {/* <Button
        style={{ color: "blue", fontWeight: "bold" }}
        onClick={handleClickOpen}
      >
        Filter
      </Button> */}
      <OpenDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openfilter}
      >
        <OpenDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Filters
        </OpenDialogTitle>
        <DialogContent dividers>
          <TabPanel />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSearch}>
            Apply
          </Button>
        </DialogActions>
      </OpenDialog>
    </div>
  );
}
