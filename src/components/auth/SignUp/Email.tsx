import React from 'react';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import { EmailInterface } from '../../../models/userModel';

export const Email: React.FC<EmailInterface> = ({email,setEmail}) => {

   const onSetEmailChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => setEmail(event.target.value)

    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                value={email}
                onChange={onSetEmailChanged}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
            />
        </Grid>
    );
}
