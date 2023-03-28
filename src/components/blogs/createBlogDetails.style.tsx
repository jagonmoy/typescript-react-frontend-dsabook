import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import { TextareaAutosize } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RootContainer = styled(Container)(({
theme})=> ({
    paddingTop: 25 ,  
}))
export const HeadlineTypography = styled(Typography)(({
  theme})=> ({
    paddingTop: 10 ,  
}))
export const HeadlineTextAreaAutosize = styled(TextareaAutosize)(({
  theme})=> ({
    width : '100%' ,  
}))
export const DescriptionTypography = styled(Typography)(({
  theme})=> ({
    paddingBottom: 5 , 
}))
export const DescriptionTextAreaAutosize = styled(TextareaAutosize)(({
  theme})=> ({
    width : '100%' ,  
}))




