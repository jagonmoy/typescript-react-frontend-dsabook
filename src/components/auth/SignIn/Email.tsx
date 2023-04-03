import React  from 'react';
import TextField from "@mui/material/TextField";
import { EmailInterface } from '../../../models/userModel';

export const Email : React.FC<EmailInterface> = ({setEmail,email}) => {
  const onSetEmailChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => setEmail(event.target.value)
  return (
    <div>
       <TextField
              data-testid='email-testid'
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={email}
              onChange={onSetEmailChanged}
              type="email"
              autoComplete="email"
              autoFocus
            />
    </div>
  );
}
