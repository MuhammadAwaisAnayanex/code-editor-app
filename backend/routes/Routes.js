const express=require("express");
const router=express.Router()
const{userSignUp, userLogin}=require("../controllers/AuthControllers");
const { createProject, getProjects } = require("../controllers/ProjectControllers");

// signUp Routes
router.post("/signUpUser",userSignUp)

// Login Routes
router.post("/loginUser",userLogin)

// create Project
router.post("/createProject",createProject)

// getProjects
router.post("/getProjects",getProjects)

module.exports=router;