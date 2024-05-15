const User = require('../models/user');
const {hashPassword,comparePassword} = require('../helpers/auth')

const test = (req,res)=>{
    res.json('test is working')
}
//register endpoint
const registerUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        //check if name is entered
        if(!name){
            return res.json({
                error:"name is rerquired"
            })
        };
        //check pass
        if(!password || password.length < 6){
            return res.json({
                error:"password is required and should be atleast 6 characters long"
            })
        };
        //check mail
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error:"email is already taken"
            })
        }
        const hashedPassword = await hashPassword(password)

        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        })
        return res.json(user)
        
    } catch (error) {
        console.log(error);
    }

}
//login endpoint

const loginUser = async (req,res)=>{
 try{
    const {email,password}=req.body;
    //check if user exists
    const user = await User.findOne({email});
    if(!user){
        return res.json({
            error:"No user found"
        })
    }
    //check if passwords match
    const match = await comparePassword(password,user.password)
    if(match){
        res.json('passwords matched')
    }
    if(!match){
        res.json({
            error:" password don't match"
        })
    }
 }catch(error){
    console.log(error)
 }

}


module.exports={
    test,
    registerUser,
    loginUser
}