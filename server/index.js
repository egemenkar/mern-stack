const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");

app.use(cors());
app.use(express.json());

/// DATABASE CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/mern', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.post("/addfriend", async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const friend = new FriendModel({name: name, age: age});
    await friend.save();
    res.send("Success");
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

