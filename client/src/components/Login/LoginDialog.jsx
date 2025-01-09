import {Box, Button, Dialog, styled, TextField, Typography} from "@mui/material"
import { useState } from "react"
import { useContext } from "react"
import {DataContext} from "../../context/DataProvider"

import { authenticateSignup } from "../../service/api"

const Component=styled(Box)`
    height:70vh;
    width:90vh;
    `


const Image=styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:83%;
    width:28%;
    padding:45px 35px;
    & > p, & > h5{
    color:#FFFFFF;
    font-weight:600;
    }
    `

const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    & > div , & > button , & > p{
    margin-top:20px;
    }
    `

const LoginButton=styled(Button)`
    text-transform:none;
    background:#FB641B;
    color:#FFF;
    height:48px;
    border-radius:2px;
    `
const RequestOTPButton=styled(Button)`
    text-transform:none;
    background:#FFF;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
    `

const Text=styled(Typography)`
    font-size:12px;
    color:#878787;`


const CreateAccount=styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;`

const accountInitialValues={
    login:{
        view:'login',
        heading:"Login",
        subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you are new here!",
        subHeading:"Sign up with your mobile number to get started"
    }
}

const signupIntitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

function LoginDialog({open,setopen}) {
    const [account,toggleAccount]=useState(accountInitialValues.login)
    const [signup,setsignup]=useState(signupIntitialValues)
    const {setAccount}=useContext(DataContext)
    const handleClose=()=>{
        setopen(false)
        toggleAccount(accountInitialValues.login)   
    }
    const ToggleSignup=()=>{
        toggleAccount(accountInitialValues.signup)
    }

    const onInputChange=(e)=>{
        setsignup({...signup,[e.target.name]:e.target.value})
    }
    
    const SignupUser=async()=>{
       let response=await authenticateSignup(signup);
       if(!response) return;
       handleClose();
       setAccount(signup.firstname)

    }
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Component>
            <Box style={{display:'flex',height:'100%'}}>
            <Image>
                <Typography variant="h5">{account.heading}</Typography>
                <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
            </Image>
            {
                account.view ==='login' ?
            <Wrapper>
                <TextField variant="standard" label="Enter Email/Mobile  number"/>
                <TextField variant="standard" label="Enter Password"/>
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
                <LoginButton>Login</LoginButton>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequestOTPButton>Request OTP</RequestOTPButton>
                <CreateAccount onClick={()=>ToggleSignup()}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} label="Enter FirstName" name="firstname"/>
                <TextField variant="standard"onChange={(e)=>onInputChange(e)} label="Enter LastName" name="lastname"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)}label="Enter Username" name="username"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)}label="Enter Email" name="email"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)}label="Enter Password" name="password"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} label="Enter Phone" name="phone"/>
                <LoginButton onClick={()=>SignupUser()}>Continue</LoginButton>
            </Wrapper>
            }
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog
