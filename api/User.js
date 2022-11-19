const express = require('express');
const router = express.Router();

//Signup 
router.post('/signup', (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();

    if(name == "" || email == "" || password == "" || dateOfBirth){
        res.json({
            status: "FAILED",
            message: "Empty input fields!";
        });
    } else if (!/^[a-zA-Z]*$/.test){
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
})

router.post('/signin', (req, res) => {

})

module.exports = router;