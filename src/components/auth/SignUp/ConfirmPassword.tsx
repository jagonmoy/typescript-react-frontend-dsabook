import React from 'react';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import { ConfirmPasswordInterface } from '../../../models/userModel';

export const ConfirmPassword: React.FC<ConfirmPasswordInterface> = ({confirmPassword,setConfirmPassword}) => {
    const onSetConfirmPasswordChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setConfirmPassword(event.target.value)
    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={confirmPassword}
                onChange={onSetConfirmPasswordChanged}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
            />
        </Grid>
    );
}
