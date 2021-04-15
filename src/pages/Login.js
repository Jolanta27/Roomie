import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import React from 'react';
import '../sass/_login.scss';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from '../components/Footer';

function Login() {
    return (
     <>
        <Grid className="grid">
            <Paper elevation={10} className="paper-style">
                <Grid align="center">
                <Avatar className="avatar-style"><LockOutlinedIcon/></Avatar>
                    <h1>Logg inn</h1>
                </Grid>
                <TextField label='Email' placeholder='Email' fullWidth required />
                <TextField label='Passord' type="password" placeholder='Passord' fullWidth required />
                <FormControlLabel
                    control = {
                    <Checkbox
                        name="checkedB"
                        color="primary"
                        />
                    }
                        label="Husk meg"
                />
                <Button type="submit" color="primary"  variant="contained" className="btn" fullWidth>Logg inn</Button>
                    <Typography className="typography"> 
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