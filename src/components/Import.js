import React from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const Import = (props) => {
    // fill out this component
    console.log(props.makes);
    return (
    <div>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions<MoreVert></MoreVert></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => (
                        <TableRow>
                            <TableCell index={index}>{make.MakeId}</TableCell>
                            <TableCell index={index}>{make.MakeName}</TableCell>
                            <TableCell index={index}>{make.Actions}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </div>
    )
}

export default Import