import React  from 'react';
import TextField from "@mui/material/TextField";
import { PasswordInterface } from '../../../models/userModel';

export const Password : React.FC<PasswordInterface> = ({setPassword,password}) => {
  const onSetPasswordChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => setPassword(event.target.value)
  return (
    <div>
            <TextField
              data-testid="password-testid"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={onSetPasswordChanged}
              type="password"
              id="password"
              autoComplete="current-password"
            />
    </div>
  );
}
