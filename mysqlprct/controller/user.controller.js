const { getAllUsers, genUser, userExist, verifyuserdata, getUserById } = require("../repository/user.repo");
const { comparePassword } = require("../utils/user.utils");

exports.getAllUser = async (req,res) => {
try {
        let users = await getAllUsers();
        return res.status(200).send({"message":"Usres Data Recieve Successfully.",users})
    } catch (error) {
    return res.status(500).send({"message":"Usres Data Recieve Time Occured Server Error !", error : error.message})
}
}
exports.createUser = async (req,res) => {
try {
        let genrateuser = await genUser(req.body);
        return res.status(200).send({message : "User Created Successflly." , user : genrateuser});
    } catch (error) {
        return res.status(500).send({message : "User Created Time Occured Server Error." , error : error.message});
    }
}
exports.verifyUser = async (req,res) => {
    try {
        let checkUser = await userExist(req.body.email);
        let compPassword = await comparePassword(req.body?.password,checkUser?.password);
        if(!compPassword){
            return res.status(400).send({message : "Your Provided Information is Wrong Please Correct Information !"});
        }
        let userverified = await verifyuserdata(checkUser.id)
        if(!userverified) return res.status(400).send({message : "User Verify Time Not Modify User Data On server !"}); 
        let upduserdata = await getUserById(checkUser.id);
        return res.status(200).send({message : "User Login Successflly." , user : upduserdata});
    } catch (error) {
        return res.status(500).send({message : "User Verify Time Occured Server Error." , error : error.message});
}
}