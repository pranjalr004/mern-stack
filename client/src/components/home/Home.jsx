import { Box,styled } from "@mui/material"
import Banner from "./Banner"
import Navbar from "./Navbar"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/productActions"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Component=styled(Box)`
    padding:10px;
    background:#F2F2F2;`

const Home=()=>{

   const {products}= useSelector(state=>state.getProducts)
   console.log(products)
    const dispatch=useDispatch()

    useEffect(()=>{
       dispatch(getProducts())
    },[dispatch])
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