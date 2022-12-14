const express = require('express');
const { find } = require('../models/User');
const router = express.Router();

const User = require('../models/User');
const bcrypt = require('bcrypt');

//Signup 
router.post('/signup', (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();

    if (name == "" || email == "" || password == "" || dateOfBirth){
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    } else if (!/^[a-zA-Z]*$/.test){
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    } else if (!new Date(dateOfBirth).getTime()){
        res.json({
            status: "FAILED",
            message: "Invalid date of birth entered"
        })
    } else if (password.length < 8){
        res.json({ 
            status: "FAILED",
            message: "Password must be at least 8 characters"
        })
    } else {
        User.find({email}).then(result => {
            if (result.length) {
                res.json({
                    status: "FAILED",
                    message: "User with the provided email id already exists"
                })
            } else {
                    const saltRounds = 10;
                    bcrypt.hash(password, saltRounds).then(hashedPassword)
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occured while checking for existing user"
            })
        })
    }
});

router.post('/signin', (req, res) => {

})

module.exports = router;