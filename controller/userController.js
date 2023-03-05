// const { create } = require('../models/user');
const User = require('../models/user');
const bcrypt = require('bcrypt');

//  create signUp controller
module.exports.signUp= async (req,res)=>{
    try {
        // fetch the user details from the req.body 
        const{ email, name, password, confirmPassword }=req.body;
        // check password and confirm password match or not
        if(password!=confirmPassword){
            return res.redirect('back');
        }
        // user already exists or not !!
        const userDetail = await User.findOne({ email: email });
        // create User 
        if(userDetail){
            return res.redirect('back');
        }
        console.log('*****')
        // hashpassword using Bcrypt
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
          // create User 
        const newUser= await User.create({
            name:name,
            email:email,
            password: hashedPassword,
            confirmPassword: hashedPassword
        });
        // save new user to database 
        console.log(newUser);
        // await newUser.save();
        // Redirect to signIn page 
        return res.redirect('/sign-in')
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// logIn controller
module.exports.signIn= async(req,res)=>{
    try {
        // fetch user details from req.body
        const {email,password}=req.body;
        // check user exist or not
        const userDetail= await User.findOne({email:email});
        if(!userDetail){
            return res.redirect('/sign_Up');
        }
        
        // password match or not 
        const isPasswordMatched= await bcrypt.compare(password,userDetail.password);
        console.log(userDetail);
        if(!isPasswordMatched){
            return res.redirect('/sign_In');
        }

        return res.redirect('/profile')
        
    } catch (error) {
       console.error(error);
       res.status(500).send('Internal server Error')
    }
}