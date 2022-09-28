import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TabPanel from "../tabPanel/TabPanel.js";
import axios from "axios";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext.js";
import useFetch from "../../hooks/useFetch.js";

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
  const { typesofassault, showIncidentfrom, timeoftheday } = useContext(SearchContext);

  const { data, loading, reFetch } = useFetch(`/getAllIncidents?typesofassault=${typesofassault}&showIncidentfrom=${showIncidentfrom}&timeoftheday=${timeoftheday}`);

  const handleSearch = () => {
    setOpenFilter(false);
    reFetch();
    console.log(data);
  };

  return (
    <div>
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
