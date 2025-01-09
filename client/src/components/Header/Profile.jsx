import { Box, Typography,Menu,MenuItem,styled} from "@mui/material"

import { useState } from "react"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
    margin-top:5px;
    `


const Logout=styled(Typography)`
    font-size:14px;
    margin-left:20px;`
const Profile=({account,setAccount})=>{
    const [open,setopen]=useState(false)

    const handleClick=(event)=>{
        setopen(event.currentTarget)
    }
    const handleClose=()=>{
        setopen(false)
    }
    const LogoutUser=()=>{
        setAccount('')
    }
    return (
        <>
        <Box onClick={handleClick}>
        <Typography style={{marginTop:2, cursor:'pointer'}}>{account}</Typography>
        </Box>
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); LogoutUser();}}>
        <PowerSettingsNewIcon color="primary" fontSize="small"/>
        <Logout>Logout</Logout>
        </MenuItem>
      </Component>
        </>
    )
}

export default Profile