import React from 'react';
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';

import classes from './NewUser.module.scss';

export const NewUser: React.FC = () => {
    return (
        <Grid className={classes.newUser}>
            <Paper
                elevation={10}
                className={classes.styleForm}
            >
                <Grid alignContent="center">
                    <Avatar className={classes.avatar}>
                        <PeopleIcon />
                    </Avatar>
                    <h1 className={classes.avatarIntro}>
                        Ny bruker
                    </h1>
                </Grid>
                <TextField
                    label="Fullt navn"
                    fullWidth
                    required
                />
                <TextField
                    label="E-mail"
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
                <TextField
                    label="Bekreft Passord"
                    type="password"
                    placeholder="Bekreft Passord"
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
                    label="Jeg aksepterer deres handlingsbetingelser"
                />
                <Button
                    className={classes.btn}
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                >
                    Opprett bruker
                </Button>
            </Paper>
        </Grid>
    );
};
