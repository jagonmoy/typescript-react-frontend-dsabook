import React  from 'react';
import TextField from "@mui/material/TextField";

interface Props {
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    password: string
}

export const EmailPassword : React.FC<Props> = ({setEmail,setPassword,password,email}) => {
  const onSetEmailChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(event.target.value)
  const onSetPasswordChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(event.target.value)
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
