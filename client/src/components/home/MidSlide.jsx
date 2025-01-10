import { Box,styled } from "@mui/material"
import Slide from "./Slide"

const Component=styled(Box)`
    display:flex;`

const LeftComponent=styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}))

const RightComponent=styled(Box)(({theme})=>({
    background:'#FFFFFF',
    padding:5,
    marginTop:10,
    marginLeft:10,
    width:'17%',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))
const MidSlide=({products,title,timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer}/>
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="advertisement" style={{width:217}}/>
            </RightComponent>
        </Component>
    )
}

export default MidSlide