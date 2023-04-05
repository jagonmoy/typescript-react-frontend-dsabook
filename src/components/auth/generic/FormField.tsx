import React from 'react';
import TextField from "@mui/material/TextField";

interface Field {
  label: string,
  field: string,
  value: string,
  type: string,
  onSetFieldChanged: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const FormField: React.FC<Field> = ({ value, onSetFieldChanged, label, field, type }) => {
  return (
    <TextField
      data-testid={`${field}`}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={`${field}`}
      label={`${label}`}
      name={`${field}`}
      value={value}
      onChange={onSetFieldChanged}
      type={`${type}`}
      autoFocus
    />
  );
}
