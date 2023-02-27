import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';


const DoctorRegForm = () => {

    const navigate = useNavigate()

    const handleDoctorSubmit = () => {
        navigate("/patientDetail")
    }

    const [bloodType, setbloodType] = React.useState('');

    const handleChange = (event) => {
        setbloodType(event.target.value);
    };

    const blood_group = [
        { id: 1, type: "A+" },
        { id: 2, type: "A-" },
        { id: 3, type: "B+" },
        { id: 4, type: "B-" },
        { id: 5, type: "AB+" },
        { id: 6, type: "AB-" },
        { id: 7, type: "O+" },
        { id: 8, type: "0-" }
    ]

    return (
        <Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    autoFocus
                    sx={{ width: 250 }}
                    margin="dense"
                    id="name"
                    label="First Name"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    sx={{ width: 250 }}
                    margin="dense"
                    id="name"
                    label="Last Name"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </Typography>
            <Typography >
                <TextField
                    autoFocus
                    sx={{ width: 250 }}
                    margin="dense"
                    id="name"
                    label="E-mail"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </Typography>
            <Typography >
                <TextField
                    autoFocus
                    sx={{ width: 250 }}
                    margin="dense"
                    id="name"
                    label="Phone Number"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </Typography>
            <Typography>
                <FormControl sx={{ width: 250, mt: 2 }}>
                    <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={bloodType}
                        label="Blood Groop"
                        variant='standard'
                        onChange={handleChange}
                    >
                        {
                            blood_group.map((data) => <MenuItem key={data.id} value={data.id} >{data.type}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Typography>
            <Typography>
                <TextField
                    autoFocus
                    sx={{ width: 250 }}
                    margin="dense"
                    id="name"
                    label="material ID #"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    autoFocus
                    sx={{ width: 250 }}
                    margin="dense"
                    id="name"
                    label="Height (CM)"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    sx={{ width: 250 }}
                    margin="dense"
                    id="name"
                    label="Weight (Kg)"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </Typography>
            <Typography sx={{ m: 1 }}>
                <Button sx={{ backgroundColor: 'rgba(118,135,225)', color: '#fff' }} onClick={handleDoctorSubmit}>Submit</Button>
            </Typography>
        </Typography>

    )
}

export default DoctorRegForm