import React  from 'react';
import TextField from "@mui/material/TextField";

interface props {
   label: string,
   field: string,
   value: string,
   onSetFieldChanged:  (event: React.ChangeEvent<HTMLTextAreaElement>) => void 
}

export const TextFieldComponent : React.FC<props> = ({value,onSetFieldChanged,label,field}) => {
  return (
    <div>
       <TextField
              data-testid = {`${field}`}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id={`${field}`}
              label={`${label}`}
              name={`${field}`}
              value={value}
              onChange={onSetFieldChanged}
              type={`${field}`}
              autoFocus
            />
    </div>
  );
}
