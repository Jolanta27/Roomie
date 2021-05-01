import React from 'react';
import {
    Avatar,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
    Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import classes from './Login.module.scss';

export const Login: React.FC = () => {
    return (
        <Grid className={classes.grid}>
            <Paper
                elevation={10}
                className={classes.paperStyle}
            >
                <Grid alignContent="center">
                    <Avatar className={classes.avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h1 className={classes.loginLogo}>
                        Logg inn
                    </h1>
                </Grid>
                <TextField
                    label="Email"
                    placeholder="Email"
                    fullWidth
                    required
                />
                <TextField
                    label="Passord"
                    type="password"
                    placeholder="Passord"
                    fullWidth
                    required
                />
                <FormControlLabel
                    control={(
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    )}
                    label="Husk meg"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    className="btn"
                    fullWidth
                >
                    Logg inn
                </Button>
                <Typography className={classes.typography}>
                    <Link href="#">
                        Glemte passordet?
                    </Link>
                </Typography>
                <Typography>
                    {' '}
                    Har du ikke konto?
                    <Link href="#">
                        Opprett ny bruker
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};
