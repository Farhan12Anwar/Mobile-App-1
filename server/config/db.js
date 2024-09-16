const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://farhan:cannonx100@cluster0.55czh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`Connected to DB ${mongoose.connection.host}`.bgCyan.white)
    } catch (error) {
        console.log(`error in connection DB ${error}`.bgRed.white);
    }
}

module.exports = connectDB;