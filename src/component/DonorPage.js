import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { LocalHospital, People } from '@material-ui/icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import map from "lodash/map";
import range from "lodash/range";
import { useNavigate } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        backgroundColor: "#2263f3e0",
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            // backgroundColor: `var(--tree-view-bg-color, rgba(12, 0, 0, 0.18))`,
            backgroundColor: '#2263f3e0',
            color: 'wheat'
            // color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

function StyledTreeItem(props) {
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        ...other
    } = props;

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </Box>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};


const DonorPage = (setIsSubmitted) => {

    const navigate = useNavigate()

    const pageLogOut = () => { navigate("/") }

    const arra_value = [
        { id: 1, color: "linear-gradient(to right, #D3D3D3, #1f1fffd1)" },
        { id: 2, color: "linear-gradient(to right, #D3D3D3, #ff1f1fd1)" },
        { id: 3, color: "linear-gradient(to right, #D3D3D3, #1fffb7d1)" },
        { id: 4, color: "linear-gradient(to right, #D3D3D3, #00da15d1)" },
        { id: 5, color: "linear-gradient(to right, #D3D3D3, #ebff00d1)" },
        { id: 6, color: "linear-gradient(to right, #D3D3D3, #e06100)" },
        { id: 7, color: "linear-gradient(to right, #D3D3D3, #d600e0)" },
        { id: 8, color: "linear-gradient(to right, #D3D3D3, #545454)" },
        { id: 9, color: "linear-gradient(to right, #D3D3D3, #ffffff)" },
        { id: 10, color: "linear-gradient(to right, #D3D3D3, violet)" },
    ]

    return (
        <div style={{
            width: "100%", height: "100%", display: 'flex', flexDirection: 'row',
            backgroundColor: "#fff"
        }} >
            <div style={{
                width: "20%",
                border: '1px solid #fff',
                backgroundColor: "#0e6fffbf",
                borderRadius: "15px",
                margin: '3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <TreeView
                    aria-label="gmail"
                    defaultExpanded={['3']}
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    defaultEndIcon={<div style={{ width: 24 }} />}
                    sx={{ mt: 10, pl: "-10px", flexGrow: 1, width: "90%", color: "#fff" }}
                >
                    <StyledTreeItem nodeId="1" labelText="Donor" labelIcon={People} />
                    <StyledTreeItem nodeId="2" labelText="Patient" labelIcon={LocalHospital} />
                </TreeView>
                <Typography>
                    <Button onClick={pageLogOut} variant='contained' sx={{ m: 3, backgroundColor: 'red', borderRadius: '10px' }}>
                        Log Out
                    </Button>
                </Typography>
            </div>
            <div style={{ width: '80%', height: "100%", borderRadius: '16px', margin: '3px', backgroundColor: 'lightgrey' }}>
                <Typography sx={{ height: "30%", overflow: "auto", display: 'flex', flexDirection: "row", m: 1, justifyContent: 'space-evenly' }}>
                    <div style={{ width: "100%", height: "100%", overflow: "auto", display: "flex" }}>
                        {
                            // map(range(10), _ => 
                            arra_value.map((data) => (
                                <div key={data.id} style={{
                                    width: "220px", margin: "6px", borderRadius: '20px',
                                    height: '100%',
                                }}>
                                    <Card
                                        sx={{
                                            height: "100%", width: "220px", border: '1px solid white',
                                            backgroundImage: data.color
                                            // backgroundColor: data.color
                                        }}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))}
                    </div>
                </Typography>
                <Typography sx={{ height: "70%" }}>
                    <TableContainer component={Paper} sx={{ m: 2, width: "97%" }} >
                        <Table sx={{ width: "100%" }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                    <StyledTableCell align="right">Calories</StyledTableCell>
                                    <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Typography>
            </div>
        </div >
    )
}

export default DonorPage
