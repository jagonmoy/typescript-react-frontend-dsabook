import React from 'react';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';

interface Props {
    confirmPassword: string,
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
}

export const ConfirmPassword: React.FC<Props> = ({confirmPassword,setConfirmPassword}) => {
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
