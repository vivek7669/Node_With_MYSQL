require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.genrateTokenData = (id) => {
    try {
        console.log("id" , id)
        let token = jwt.sign( { id: id.toString() } , process.env.JWT_SECRET_KEY , { expiresIn: '1h'} )
        return token;
    } catch (error) {
        throw new Error("Token Create time Ocured Error !")
    }
}

exports.passwordHashing = async (data) => {
    try {
        let password = await bcrypt.hash(data,10)
        return password;
    } catch (error) {
        throw new Error("Password Hashing Time Ocured Error !")
    }
}

exports.comparePassword = async (data,hashdata) => {
    try {
        let password = await bcrypt.compare(data,hashdata)
        return password;
    } catch (error) {
        throw new Error("Password Hashing Time Ocured Error !")
    }
}