import React from 'react';
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';


interface Props {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>
}

export const Name : React.FC<Props> = ({name,setName}) => {
  const onSetNameChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)
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
