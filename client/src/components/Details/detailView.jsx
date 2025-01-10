import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductsDetails } from "../../redux/actions/productActions"
import { Box, Typography,styled,Grid } from "@mui/material"
import ActionItem from "./ActionItem"


const Component=styled(Box)`
    background:#F2F2F2;
    margin-top:55px;
    `

const Container=styled(Grid)`
    background:#FFFFFF;
    display:flex;
    `

const RightContainer=styled(Grid)`
    margin-top:50px;`

const DetailView=()=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch=useDispatch()
    const {id} = useParams()

    const {loading,product}=useSelector(state=>state.getProductsDetails);

    useEffect(()=>{
        if(product && id!==product.id)
        dispatch(getProductsDetails(id))
    },[dispatch,id,product,loading])

    console.log(product)
    return (
        <Component>
            {
          product && Object.keys(product).length && 
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>
                            8 Ratings & 1 Reviews
                            <Box component="span">
                                <img src={fassured} style={{width:77,marginLeft:20}} alt=""/>
                            </Box>
                            </Typography>
                            <Typography>
                                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;
                                <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;
                                <Box component="span" style={{color:'#388E3C'}}>₹{product.price.discount}</Box>&nbsp;&nbsp;
                            </Typography>
                    </RightContainer>
                </Container>
            }
        </Component>
    )
}

export default DetailView