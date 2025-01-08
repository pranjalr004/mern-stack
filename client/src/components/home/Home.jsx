import { Box,styled } from "@mui/material"
import Banner from "./Banner"
import Navbar from "./Navbar"

const Component=styled(Box)`
    padding:10px;
    background:#F2F2F2;`

const Home=()=>{
    return (
        <>
            <Navbar/>
            <Component>
            <Banner/>
            </Component>
        </>
        
    )
}

export default Home