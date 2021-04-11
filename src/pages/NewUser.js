import React from 'react';
import {  Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import Footer from '../Footer';

const NewUser = () => {
    const newUser = {height: '96vh', paddingTop: '55px'}
    const paperStyleForm = {padding: 20, height: '70vh', width: 400, margin: "48px auto"}
    const avatarStyleForm = {backgroundColor: 'rgb(156, 45, 156)' }
    const h1 = {paddingTop: 20, paddingBottom: 40}
    const btnForm = { backgroundColor: 'rgb(156, 45, 156)', margin: '8px 0', marginTop: 20, marginBottom: 20 }
    return (
        <>
        <Grid style={newUser}>
            <Paper elevation={10} style={paperStyleForm}>
                <Grid align="center">
                <Avatar style={avatarStyleForm}><PeopleIcon /></Avatar>
                <h1 style={h1}>Ny bruker</h1>
                </Grid>
                <TextField label="Fullt navn" fullWidth required/>
                <TextField label="E-mail" fullWidth required/>
                <TextField label='Passord' type="password" placeholder='Passord' fullWidth required/>
                <TextField label='Bekreft Passord' type="password" placeholder='Bekreft Passord' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Jeg aksepterer deres handlingsbetingelser"
                />
                   <Button style={btnForm} type="submit" color="primary"  variant="contained" fullWidth>Opprett bruker</Button>
            </Paper>
        </Grid>
    <Footer />
        </>
    )
}
export default NewUser;