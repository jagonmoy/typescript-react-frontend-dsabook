import React from 'react';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import { NameInterface } from '../../../models/userModel';

export const Name : React.FC<NameInterface> = ({name,setName}) => {
  const onSetNameChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => setName(event.target.value)
  return (
      <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="text"
                  id="name"
                  label="Name"
                  value={name}
                  name="name"
                  autoComplete="name"
                  onChange={onSetNameChanged}
                />
              </Grid>
  );
}
