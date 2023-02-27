import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { register } from "./RegistrationStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

class ChoseLogin extends Component {
    state = {
        email: "",
        password: "",
        passwordConfrim: "",
        hidePassword: true,
        error: null,
        createAccount: false,
        errorOpen: false
    };

    createAcc = () => {
        this.setState({
            createAccount: true
        })
    }



    handleDoctorSubmit = () => {
        useNavigate("/patientDetail")
    }

    errorClose = e => {
        this.setState({
            errorOpen: false
        });
    };

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value
        });
    };

    passwordMatch = () => this.state.password === this.state.passwordConfrim;

    showPassword = () => {
        this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
    };

    isValid = () => {
        if (this.state.email === "") {
            return false;
        }
        return true;
    };
    submitRegistration = e => {
        e.preventDefault();
        if (!this.passwordMatch()) {
            this.setState({
                errorOpen: true,
                error: "Passwords don't match"
            });
        }
        const newUserCredentials = {
            email: this.state.email,
            password: this.state.password,
            passwordConfrim: this.state.passwordConfrim
        };
        console.log("this.props.newUserCredentials", newUserCredentials);
        //dispath to userActions
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.main}>
                <CssBaseline />
                <Typography sx={{ mt: 20 }}>
                    <Paper className={classes.paper}>
                        <Typography sx={{ p: 4 }}>
                            <Link to="/DoctorLogin" style={{ textDecoration: 'none' }} >
                                <Button style={{ backgroundColor: 'rgb(132 172 224)', padding: "12px 20px 12px 20px", color: '#fff' }} >Doctor Login</Button>
                            </Link>
                        </Typography>
                        <Typography sx={{ p: 4 }}>
                            <Link to="/DonorLogin" style={{ textDecoration: 'none' }}>
                                <Button style={{ backgroundColor: 'rgb(132 172 224)', padding: "12px 20px 12px 20px", color: '#fff' }}>Donor Login</Button>
                            </Link>
                        </Typography>
                    </Paper>
                </Typography>
            </div >
        );
    }
}

export default withStyles(register)(ChoseLogin);
