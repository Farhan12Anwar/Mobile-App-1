const JWT = require('jsonwebtoken')
const { hashPassword, comparePassword } = require('../helpers/authHelper');
const userModel = require('../models/userModel');

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name) {
            return res.status(400).send({
                success: false,
                message: 'Name is required',
            });
        }
        if (!email) {
            return res.status(400).send({
                success: false,
                message: 'Email is required',
            });
        }
        if (!password || password.length < 6) {
            return res.status(400).send({
                success: false,
                message: 'Password is required and must be at least 6 characters long',
            });
        }

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: 'User already registered with this email',
            });
        }
        //hashed password
        const hashedPassword = await hashPassword(password)

        //Save User
        const user = await userModel({ name, email, password:hashedPassword}).save();
        // Successful registration response
        return res.status(201).send({
            success: true,
            message: 'Registration successful, please login',
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'Error in Register API',
            error,
        });
    }
};

//Login
const loginController = async(req,res) => {
    try {
        const {email,password} = req.body;
        //validation
        if(!email || !password) {
            return res.status(500).send({
                success:false,
                message:'Please provide email or password'
            })
        }

            //find user
            const user = await userModel.findOne({email})
            if(!user) {
                return res.status(500).send({
                    success:false,
                    message:'User Not Found'
                })
            }
            //match Password
            const match = await comparePassword(password, user.password)
            if(!match) {
                return res.status(500).send({
                    success:false,
                    message:'Invalid username or password'
                })
            }

            //Token JWT
            const token = await JWT.sign({_id:user._id}, process.env.JWWT_SECRET,{
                expiresIn:'7d'
            })
            //undefined Password
            user.password = undefined;
            res.status(200).send({
                success:true,
                message:'login successfully',
                token,
                user,
            })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'error in login api',
            error,
        })
    }
}

module.exports = { registerController, loginController };
