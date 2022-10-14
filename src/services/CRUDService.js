import bcrypt from'bcryptjs';
import db from "../models/index"


const salt = bcrypt.genSaltSync(10);

let createNewUser =async (data) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        } catch (error) {
            reject(error);
        }
    })
}

let hashUserPassword=(password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPassword = await bcrypt.hashSync("B4c0/\/", salt); 
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports={
    createNewUser:createNewUser
}