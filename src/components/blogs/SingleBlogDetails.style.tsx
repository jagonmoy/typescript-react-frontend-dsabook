import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";


export const RootContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  marginLeft: theme.spacing(10)
}));

export const BasicGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "block",
  width: "100%",
  transitionDuration: "0.3s",
}));