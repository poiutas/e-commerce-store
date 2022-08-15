import { Button, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <Container component={Paper} sx={{height:400}}>
            <Typography gutterBottom variant ="h5">
               Oops not found 
               <Divider/>
            </Typography>
               <Button fullWidth component={Link} to ="/catalog"> go back</Button>
        </Container>
    )
}