const mongoose = require("mongoose");

const connectToMongo = async () => {
    try {
        // mongodb+srv://drashtidankhara7:<password>@cluster0.jcwxk8q.mongodb.net/test
        await mongoose.connect("mongodb+srv://drashtidankhara7:drashtidankhara7@cluster0.jcwxk8q.mongodb.net/AlmaPlus?retryWrites=true&w=majority");
        console.log("Connected To AlmaPlus !!!");
    } catch (error) {
        console.log("Error in connection : ", error);
    }
}

module.exports = connectToMongo;