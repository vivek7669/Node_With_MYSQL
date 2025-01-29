const user = require("../model/user.model")
const jwt = require("jsonwebtoken");
const { genrateTokenData, passwordHashing } = require("../utils/user.utils");
const getAllUsers = async () => {
    let data = await user.findAll();
    return data
}

const genUser = async (data) => {
    let usegendata = {
        username :  data.username,
        email :  data.email,
       password : await passwordHashing(data.password)
    }
    let userdata = await user.create(usegendata)
    let tokendata = await genrateTokenData(userdata.id)
    if(tokendata){
       await user.update({token : tokendata},{where : { id : userdata.id }, returning : true})
       return {...userdata , tokendata};
    }
}

const getUserById = async (id) => {
    try {
            let userdata = await user.findByPk(id);
            if(!userdata) throw new Error ("User IS Not Founded !") 
            return userdata
    } catch (error) {
            throw new Error("Id Throght Get Data Time : ",error);
    }
}

const userExist = async (email) => {
try {
        let userdata = await user.findOne({where : {email : email} });
        if(userdata == null) throw new Error("User Not Founded !");
        return userdata
} catch (error) {
    throw new Error(error);
}
}

const verifyuserdata = async (id) => {
try {
        await user.update({token : ''},{where : {id : id}})
        let createdtoken = await genrateTokenData(id)
        let modifyeduserdata = await user.update({token : createdtoken},{where : {id : id}})
        if(modifyeduserdata[0]==1){
            return true
        }
        else{
            return false
        }
} catch (error) {
    throw new Error ("error Verify Time : " , error )
}
}

module.exports = {getAllUsers , genUser , getUserById ,  userExist , verifyuserdata}