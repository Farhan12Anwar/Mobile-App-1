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
        //Save User
        const user = await userModel({ name, email, password}).save();
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

module.exports = { registerController };
