import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, Typography } from '@mui/material';
import WestIcon from '@mui/icons-material/West';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(patId, Organs, Date, Severity, msgBtn) {
    return { patId, Organs, Date, Severity, msgBtn };
}

const rows = [
    createData('#PAT1234', "Heart", "02-01-2023", "93%"),
    createData('#PAT1232', "Kidney", "02-01-2023", "99%"),
    createData('#PAT1233', "Liver", "02-01-2023", "68%"),
    createData('#PAT1235', "Kidney", "02-01-2023", "83%"),
    createData('#PAT1236', "Lungs", "02-01-2023", "45%"),
];

const PatientDetail = () => {

    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    }

    const handleSendMsg = () => [
        alert('msg sended Successfully')
    ]

    return (
        <Dialog fullScreen open={true}>
            <TableContainer component={Paper}>
                <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: 2, pl: 10, color: '#2564C3' }} variant='h5'>
                        Patient Medical Details
                    </Typography>
                    <Button variant='contained' onClick={handleBackClick} sx={{ float: 'right', m: 2 }}>
                        <WestIcon />
                    </Button>
                </Typography>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">MED ID #</StyledTableCell>
                            <StyledTableCell align="center">Organ</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>
                            <StyledTableCell align="center">Severity</StyledTableCell>
                            <StyledTableCell align="center">Send Message</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.patId}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {row.patId}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.Organs}</StyledTableCell>
                                <StyledTableCell align="center">{row.Date}</StyledTableCell>
                                <StyledTableCell align="center">{row.Severity}</StyledTableCell>
                                <StyledTableCell align="center">
                                    {<Button onClick={handleSendMsg} variant='contained'>Send Msg</Button>}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Dialog>
    );
}

export default PatientDetail