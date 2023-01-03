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
import { deletePeoplelistStart } from "../redux/ducts/Peoplelist";
const PeopleLists = ({ peopleList, handleOpen }) => {
    const dispatch = useDispatch()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    // const { peoplelist } = useSelector((state) => state.peoplelist);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(peopleList);
    }, [peopleList]);

    return (
        // <h1>j</h1>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h5">Id</Typography></TableCell>
                            <TableCell><Typography variant="h5">Name</Typography></TableCell>
                            <TableCell><Typography variant="h5">Contact</Typography></TableCell>
                            <TableCell><Typography variant="h5">Edit</Typography></TableCell>
                            <TableCell><Typography variant="h5">Delete</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 0 &&
                           data?.map((row) =>
                            (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.contact}</TableCell>
                                    <TableCell><EditIcon fontSize="small" onClick={handleOpen} style={{ cursor: "pointer" }} /></TableCell>
                                    <TableCell><DeleteForeverIcon fontSize="small" style={{ cursor: "pointer" }} onClick={() => dispatch(deletePeoplelistStart({ id: row.id }))} /></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                     rowsPerPageOptions={[10, 25, 100]}
                     component="div"
                     count={100} // total number of rows
                     rowsPerPage={rowsPerPage}
                     page={page}
                     onChangePage={handleChangePage}
                     onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Paper>
    );
};

export default PeopleLists;
