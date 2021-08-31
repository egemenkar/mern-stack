const express = require("express");
const app = express();
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");

/// DATABASE CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/mern', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get("/insert", async (req, res) => {
    const friend = new FriendModel({name: "John", age: 98});
    await friend.save();
    res.send("Inserted DATA");
});

app.get("/read", async (req, res) => {
    FriendModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });

});

app.listen(3001, () => {
    console.log("You're connected!");
});

