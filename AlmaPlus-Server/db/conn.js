const mongoose = require("mongoose");

const connectToMongo = async () => {
    try {
        // mongodb+srv://drashtidankhara7:<password>@cluster0.jcwxk8q.mongodb.net/test
        await mongoose.connect("mongodb+srv://rudra:Rudra@cluster0.wshjk1j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected To AlmaPlus !!!");
    } catch (error) {
        console.log("Error in connection : ", error);
    }
}

module.exports = connectToMongo;
