import React from 'react';
import { Button, Table, TableHead,
    TableBody, TableRow,
    TableCell, TableContainer,
    Menu, MenuItem, IconButton } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';


const DeleteMenu = (props) => {
    const { deleteMake, makeIndex } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVert />
        </IconButton>
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
            style: {
                maxHeight: 48 * 4.5,
                width: '20ch',
            },
            }}
        >
            <MenuItem onClick={() => { deleteMake(makeIndex); handleClose(); }}>
                Delete
            </MenuItem>
        </Menu>
        </div>
    );
}



const Import = (props) => {
    // fill out this component
    console.log(props.makes);
    return (
    <div>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
    <h2>COUNT: {props.makes.length}</h2>
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
                        <TableRow key={index}>
                            <TableCell index={index}>{make.MakeId}</TableCell>
                            <TableCell index={index}>{make.MakeName}</TableCell>
                            <TableCell index={index}>
                                <DeleteMenu deleteMake={props.deleteMake} makeIndex={index} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}

export default Import