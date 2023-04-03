import React from 'react';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import { UsernameInterface } from '../../../models/userModel';

export const Username: React.FC<UsernameInterface> = ({ username, setUsername }) => {
    const onSetUsernameChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setUsername(event.target.value)
    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="username"
                value={username}
                onChange={onSetUsernameChanged}
                label="Username"
                name="username"
                autoComplete="username"
            />
        </Grid>
    );
}
