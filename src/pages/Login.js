import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from '../Footer';

const Login = () => {
    const grid = {height:'96vh', paddingTop: '55px'}
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: "20px auto"}
    const avatarStyle = { backgroundColor: 'rgb(156, 45, 156)'}
    const h1 = {paddingTop: 20, paddingBottom: 40}
    const btnStyle = {margin: '8px 0', backgroundColor: 'rgb(156, 45, 156)', marginTop: 20, marginBottom: 20}
    const typography = {paddingBottom: 10}
    return (
     <>
        <Grid style={grid}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h1 style={h1}>Logg inn</h1>
                </Grid>
                <TextField label='Email' placeholder='Email' fullWidth required/>
                <TextField label='Passord' type="password" placeholder='Passord' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Husk meg"
                />
                <Button type="submit" color="primary"  variant="contained" style={btnStyle}fullWidth>Logg inn</Button>
                    <Typography style={typography}> 
                        <Link href="#">
                            Glemte passordet?
                        </Link>
                    </Typography>
                    <Typography> Har du ikke konto?
                        <Link href="#">
                             Opprett ny bruker
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        <Footer/>
  </>
    )
}
export default Login;