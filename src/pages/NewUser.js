import React from 'react';
import {  Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import '../sass/NewUser.scss';
import Footer from '../Footer';

function NewUser() {
    return (
        <>
        <Grid className="new-user">
            <Paper elevation={10} className="style-form">
                <Grid align="center">
                <Avatar className="avatar"><PeopleIcon /></Avatar>
                <h1>Ny bruker</h1>
                </Grid>
                <TextField label="Fullt navn" fullWidth required />
                <TextField label="E-mail" fullWidth required />
                <TextField label='Passord' type="password" placeholder='Passord' fullWidth required />
                <TextField label='Bekreft Passord' type="password" placeholder='Bekreft Passord' fullWidth required />
                <FormControlLabel
                    control = {
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Jeg aksepterer deres handlingsbetingelser"
                />
                   <Button className="btn" type="submit" color="primary"  variant="contained" fullWidth>Opprett bruker</Button>
            </Paper>  
        </Grid>
        <Footer /> 
        </>
    )
}
export default NewUser;