import React from "react";
import TablePagination from '@mui/material/TablePagination';
import { useState } from "react";
import "./incidentScrollbar.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import IncidentCard from "../IncidentCard/IncidentCard.js";

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
    `https://hercare-0nh9.onrender.com/getAllIncidents?typesofassault=${typesofassault}&locations=${locations}&showIncidentsfrom=${showIncidentsfrom}`
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
              labelRowsPerPage='Incidents Per Page'
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
