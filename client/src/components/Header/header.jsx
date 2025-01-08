import React from 'react'
import {AppBar,Toolbar,styled,Box,Typography} from "@mui/material"

const Styledheader=styled(AppBar)`
    background:#2874f0;
    height:55px;
`

const Component=styled(Box)`
    margin-left:12%;
    line-height:0;`

const SubHeading=styled(Typography)`
    font-size:10px;
    font-style:italic;
`

const PlusImg=styled('img')({
    width:10,
    height:10,
    marginLeft:4
})
const Header=()=>{
    const logoURL='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <Styledheader>
            <Toolbar>
            <Component>
                <img src={logoURL} alt='logo' style={{width:75}}/>
                <Box style={{display:'flex'}}>
                    <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImg src={subURL} alt='sublogo'/>
                </Box>
            </Component>
            </Toolbar>
        </Styledheader>
    )
}
export default Header
