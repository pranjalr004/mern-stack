import Banner from "./Banner"
import Navbar from "./Navbar"
import Slide from "./Slide"
import MidSection from "./MidSection"
import { Box,styled } from "@mui/material"

import { useEffect } from "react"
import { getProducts } from "../../redux/actions/productActions"
import { useDispatch,useSelector } from "react-redux"
import MidSlide from "./MidSlide"

const Component=styled(Box)`
    padding:10px;
    background:#F2F2F2;`

const Home=()=>{
    const {products}=useSelector(state=>state.getProducts)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <>
            <Navbar/>
            <Component>
            <Banner/>
            <MidSlide products={products} title="Deal of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            <Slide products={products} title="Season's top picks" timer={false}/>
            </Component>
        </>
        
    )
}

export default Home