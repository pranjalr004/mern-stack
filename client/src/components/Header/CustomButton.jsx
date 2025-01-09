import { Box, Button, Typography, styled } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react';
import LoginDialog from '../Login/LoginDialog';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

const Wrapper = styled(Box)`
    display:flex;
    margin:0 3% 0 auto;
    & > button, & > p , & > div{
        margin-right:40px;
        font-size:16px;
        align-items:center;
    }
    `

const Container = styled(Box)`
    display:flex`


const LoginButton = styled(Button)`
    color:#2874f0;
    background:#FFFFFF;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
    `
function CustomButton() {
    const [open, setopen] = useState(false)
    const openDialog = () => {
        setopen(true)
    }

    const { account } = useContext(DataContext)

    return (
        <Wrapper>
            {
                account ? <Typography>{account}</Typography> :
                    <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setopen={setopen} />
        </Wrapper>
    )
}

export default CustomButton
