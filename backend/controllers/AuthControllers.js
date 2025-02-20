const AuthModel = require("../models/AuthModel")
const bcrypt = require("bcrypt");

const userSignUp = async (req, res, ) => {

    const {fullName, email, password } = req.body

    try {

        const emailIsExist = await AuthModel.exists({ email })

        if (emailIsExist) {
            res.status(302).json({msg:"User is Already Exit"})
        } else {

            // hash password
            const hashPassword = await bcrypt.hash(password, 10)

            const addUser = await AuthModel.create({ fullName,email, password: hashPassword })

            res.status(200).json({ msg: "User SignUp Successfully Done", data: addUser })

        }

    } catch (error) {
        res.status(422).json(error)
    }
}

// userLogin
const userLogin = async (req, res,) => {

    const { email, password } = req.body

    try {

        const findUser = await AuthModel.findOne({ email: email })

        if (!findUser) {
            res.status(404).json({msg:"User is Not Found please go to SignUp Page"})
        }else{
        // if match password
        const matchPassword = await bcrypt.compare(password, findUser.password)

        if (!matchPassword) {
            res.status(401).json({msg:"Invalid Credentials"})
        } else {
            res.status(200).json({msg: "User Login SuccessFully Done!", data: findUser })
        }
        }

    } catch (error) {
        res.status(422).json(error)
    }
}

module.exports={userSignUp,userLogin}