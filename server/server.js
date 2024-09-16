const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

//DOTENV
dotenv.config();

//REST OBJECT
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//ROUTES
app.get('', (req, res) => {
    res.status(200).json({
        success:true,
        message:'Welcome to fullstack application'
    })
})

//PORT
const PORT = process.env.PORT || 8080

//LISTEN
app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`.bgWhite.white)
})