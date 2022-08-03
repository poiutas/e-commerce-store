import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";

interface Props {
    toggleFunction:  () => void,
    darkMode: boolean
}

export default function Header({darkMode, toggleFunction}: Props){
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">Re-Store</Typography>
                <Switch checked={darkMode} onChange={toggleFunction}/>
            </Toolbar>
        </AppBar>
    )
}