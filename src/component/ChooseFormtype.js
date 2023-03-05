import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PatientRegistrationForm from './PatientRegistrationForm';
import DonorRegistrationForm from './DonorRegistrationForm'

export default function ChooseFormType(props) {
    const { open, setOpen } = props
    const [value, setValue] = React.useState('');


    const handleClose = () => {
        setOpen(false);
    };

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{ textAlign: 'center' }} id="alert-dialog-title">
                    Registration From
                </DialogTitle>
                <DialogContent>
                    {value === "Donor" ? <DonorRegistrationForm value={value} /> : value === "Patient" ? <PatientRegistrationForm value={value} /> : "Choose Your Form Type"}
                </DialogContent>
                <FormControl sx={{ m: 3 }} variant="standard">
                    <FormLabel id="demo-error-radios">Register for </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                        sx={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <FormControlLabel value="Donor" control={<Radio />} label="Donor!" />
                        <FormControlLabel value="Patient" control={<Radio />} label="Patient!" />
                    </RadioGroup>
                </FormControl>
            </Dialog>
        </div>
    );
}