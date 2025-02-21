const ProjectModel=require("../models/ProjectModel")
const AuthModel = require("../models/AuthModel")

const createProject= async(req,res)=>{
    let { userId, title } = req.body;
    let user = await AuthModel.findOne({ _id: userId });
    if (user) {
      let project = await ProjectModel.create({
        title: title,
        createdBy: userId
      });
  
  
      return res.json({ success: true, message: "Project created successfully", projectId: project._id });
    }
    else {
      return res.json({ success: false, message: "User not found!",userId});
    }
}

// getAllProject
const getProjects=async(req,res)=>{
  try {
    const {userId}=req.body;

    let user= await AuthModel.findOne({_id:userId})
    
    if (user) {
      let projects = ProjectModel.find({createdBy:userId})
      return res.json({ success: true, message: "Projects fetched successfully", projects: projects });
    } else {
      return res.json({ success: false, message: "User not found!" });
    }
  } catch (error) {
    res.status(402).json(error)
  }
}

module.exports={createProject,getProjects}