import bcrypt from'bcryptjs';
import db from "../models/index"


const salt = bcrypt.genSaltSync(10);

let createNewUser =async (data) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender==='1' ? true : false,
                roleId: data.roleId
            })

            resolve('OK create a new user successful');
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