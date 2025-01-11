import { Box, Button, styled, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {LocalOffer as Badge} from '@mui/icons-material';

const TextButton=styled(Button)`
    color:'#2874f0';
    font-weight:600;
    cursor:'pointer';

`

const SmallText=styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    & > p{
        font-size:14px;
    }`

const StyledBadge=styled(Badge)`
    margin-right:10px;
    color:#3bb462;
    font-size:15px;
`

const ColumnText=styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    & > td{
        font-size:14px;
        margin-top:10px;
        border:none;
    }`


const ProductDetail=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date=new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000 ))
    return (
        <>
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
                        <Typography>Available Offers</Typography>
                        <SmallText>
                            <Typography><StyledBadge/>Special PriceGet extra 21% off    (price inclusive of cashback/coupon)<TextButton>T&C</TextButton></Typography>
                            <Typography><StyledBadge/>Bank Offer10% off up to ₹1,200 on HDFC Bank Credit Card EMI on 6 and 9 months tenure. Min Txn Value: ₹5000<TextButton>T&C</TextButton></Typography>
                            <Typography><StyledBadge/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card<TextButton>T&C</TextButton></Typography>
                            <Typography><StyledBadge/>No cost EMI ₹2,233/month. Standard EMI also available <TextButton>View Plans<ArrowForwardIosIcon style={{fontSize:15}}/></TextButton></Typography>
                            <Typography><StyledBadge/>Buy Keyboard combo with Monitor and Get 5% Off<TextButton>T&C</TextButton></Typography>
                            <Typography><StyledBadge/>Buy Webcam with Monitor and Get 5% Off<TextButton>T&C</TextButton></Typography>
                            <Typography><StyledBadge/><b>No cost EMI ₹2,233/month.</b>  Standard EMI also available<TextButton>View Plans</TextButton></Typography>
                        </SmallText>
                        <Table>
                            <TableBody>
                                <ColumnText>
                                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                                    <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableCell style={{color:'#878787'}}>Seller</TableCell>
                                    <TableCell>
                                        <Box component="span" style={{color:'#2874f0'}}>Super ComNet</Box>
                                        <Typography>GST invoice available</Typography>
                                        <Typography>View more Sellers starting from ₹{product.price.cost}</Typography>
                                    </TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableCell colSpan={2}>
                                        <img src={adURL} alt="flipkartpoints" style={{width:390}}/>
                                    </TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableCell style={{color:'#878787'}}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </ColumnText>
                            </TableBody>
                        </Table>
        </>
    )
}

export default ProductDetail