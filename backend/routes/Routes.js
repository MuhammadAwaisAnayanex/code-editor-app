const express=require("express");
const router=express.Router()
const{userSignUp, userLogin}=require("../controllers/AuthControllers")

// signUp Routes
router.post("/signUpUser",userSignUp)

// Login Routes
router.post("/loginUser",userLogin)

module.exports=router;