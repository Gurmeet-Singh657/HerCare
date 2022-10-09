import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import "./incidentScrollbar.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useFetch from "../../hooks/useFetch";
import { dateRangePickerToolbarClasses } from "@mui/x-date-pickers-pro";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import IncidentCard from "../IncidentCard/IncidentCard.js";
import { useEffect } from "react";

export default function SimpleTable() {
  const {
    typesofassault,
    setTypesofassault,
    locations,
    setLocations,
    showIncidentsfrom,
    setShowIncidentsfrom,
  } = useContext(SearchContext);

  const { data, loading, reFetch } = useFetch(
    `https://hercare.herokuapp.com/getAllIncidents?typesofassault=${typesofassault}&locations=${locations}&showIncidentsfrom=${showIncidentsfrom}`
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className="fullPage">
        <div className="gridParent">
          {data.length === 0 && (
            <div className="nothinghere">
              No incident to show here&nbsp;&nbsp;
              <VisibilityOffIcon />
            </div>
          )}
          {data.length > 0 &&
            data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <IncidentCard
                  className="gridChild"
                  key={index}
                  title={row.title}
                  time={row.time}
                  typeOfViolence={row.typeOfViolence}
                  gender={row.gender}
                  age={row.age}
                  city={row.address.city}
                  state={row.address.state}
                  desc={row.message}
                />
              ))}
        </div>
        <div className="paginationfooter">
          {data.length > 0 && (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
