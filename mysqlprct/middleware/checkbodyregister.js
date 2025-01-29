exports.chceckingBody = async (req , res , next) => {
    try {
    let { username , email , password } = req.body;
     if(!username || !email || !password){
         return res.status(400).send({"message" : "Fill The Required Fields !"})
        }
    if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password))){
        return res.status(400).send({"message" : "Password Must Be Strong !"})
    }
        next();
    } catch (error) {
       return res.status(500).send({"message" : "Body Check Time Occured Error !",error : error?.message})
   }
}
