import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

export const Paper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

export const Form = styled('form')(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));