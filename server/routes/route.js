import express from "express"
const router=express.Router()
import { userSignup,userLogin } from "../controller/user-controller.js"
import { getProducts } from "../controller/product-controller.js"
router.post("/signup",userSignup)

router.post("/login",userLogin)

router.get("/products",getProducts)

export default router