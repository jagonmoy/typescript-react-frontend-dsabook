import React from 'react';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import { PasswordInterface } from '../../../models/userModel';

export const Password: React.FC<PasswordInterface> = ({password,setPassword}) => {
    const onSetPasswordChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(event.target.value)
    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                onChange={onSetPasswordChanged}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
            />
        </Grid>
    );
}
