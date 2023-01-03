import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteEventlistStart, editEventlistStart } from "../redux/ducts/Eventlists";

const columns = [
    { id: "ID", event_name: "id" },
    { id: "Username", event_name: "username" },
    { id: "Name", event_name: "name" },
    { id: "Email", event_name: "email" },
    { id: "Phone", event_name: "phone" },
    { id: "Web Link", event_name: "website" },
];

const Cardstable = ({ eventList,handleOpen }) => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(eventList);
    }, [eventList]);
    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography  variant="h5">Id</Typography></TableCell>
                            <TableCell><Typography  variant="h5">Event</Typography></TableCell>
                            <TableCell><Typography  variant="h5">File</Typography></TableCell>
                            <TableCell><Typography  variant="h5">Edit</Typography></TableCell>
                            <TableCell><Typography  variant="h5">Delete</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 0 &&
                            data?.map((row) =>
                             (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.card_name}</TableCell>
                                    <TableCell><img src={row.event_card} width="22px" height="50px"></img></TableCell>
                                    <TableCell><EditIcon fontSize="small" onClick={handleOpen} style={{ cursor: "pointer" }} /></TableCell>
                                    <TableCell><DeleteForeverIcon fontSize="small" style={{ cursor: "pointer" }} onClick={() => dispatch(deleteEventlistStart({id:row.id}))} /></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                {/* <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    count={100} // total number of rows
                    rowsPerPage={pageSize}
                    page={page}
                    onChangePage={(event, newPage) => setPage(newPage)}
                    onChangeRowsPerPage={event => setPageSize(event.target.value)}
                /> */}
            </TableContainer>
        </Paper>
    );
};

export default Cardstable;
