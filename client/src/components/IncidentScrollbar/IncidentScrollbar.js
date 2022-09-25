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
import "./incidentScrollbar.css"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useFetch from "../../hooks/useFetch";
import { dateRangePickerToolbarClasses } from "@mui/x-date-pickers-pro";


function createData(title, location, datetime, desc) {
    return { title, location, datetime, desc };
}

const rows = [
    createData("Touching /Groping", "Kashmere Gate", "9 Dec 2022 08:30:00", "I was traveling in yellow line metro when a person tried to group me in mob in the metro while standing _S03476"),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread2", 356, 16.0, 49, 3.9),
    createData("Gingerbread3", 356, 16.0, 49, 3.9),
    createData("Gingerbread4", 356, 16.0, 49, 3.9),
    createData("Gingerbread5", 356, 16.0, 49, 3.9),
    createData("Gingerbread6", 356, 16.0, 49, 3.9),
    createData("Gingerbread7", 356, 16.0, 49, 3.9),
    createData("Gingerbread8", 356, 16.0, 49, 3.9),
    createData("Gingerbread9", 356, 16.0, 49, 3.9),
    createData("Gingerbread10", 356, 16.0, 49, 3.9),
    createData("Gingerbread11", 356, 16.0, 49, 3.9),
    createData("Gingerbread12", 356, 16.0, 49, 3.9),
    createData("Gingerbread13", 356, 16.0, 49, 3.9)
];

export default function SimpleTable() {
    const { data, loading, error } = useFetch("/getAllIncidents");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        console.log(data);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <TableContainer sx={{
                "&::-webkit-scrollbar": {
                    width: 20
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "orange"
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "red",
                    borderRadius: 2
                }
            }} style={{ maxHeight: "70vh", height: "maxcontent", marginBottom: "20" }} component={Paper}>
                {
                    data.length === 0 &&
                    <div className="nothinghere">
                        No incident to show here&nbsp;&nbsp;<VisibilityOffIcon />
                    </div>
                }
                <Table stickyHeader aria-label="simple table">
                    <TableBody>
                        {data.length > 0 && data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {/* {row.title} */}
                                        {/* {typeOfViolence} */}
                                        {/* Gurmeet */}
                                        {row.title}
                                        {row.time}
                                        {row.typeOfViolence}
                                        {row.address.city}
                                    </TableCell>
                                </TableRow>
                            ))}

                        {/* <TableRow>
                        <TableCell colSpan={1} />
                        </TableRow> */}
                    </TableBody>
                </Table>
                {data.length > 0 && <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />}
            </TableContainer>
        </>
    );
}