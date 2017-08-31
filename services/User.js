/**
 * Created by guosen on 2017/8/16.
 */
var models=require('../models');
var User=new Object();
User.create=function (user) {
    if(user.password){
        user.password=getPassword(user.password);
    }
    return models.User.create(user);
}
User.find = function (filter) {
    filter.attributes= ['id', 'username'];
    filter.include='roles';
   return models.User.findAll(filter)
}
User.login=function (form) {
    if(form.username&&form.password){
        return models.User.findOne({
            where:{username:form.username},
        })
            .then(function (user) {
                if(user){
                    if(user.password==getPassword(form.password)){
                        delete user.password;
                        return Promise.resolve(user);
                    }else{
                        return Promise.reject({message:'password wrong'});
                    }
                }else{
                    return Promise.reject({message:'username not fount'});
                }
            })
    }else{
        return Promise.reject({message:'username and password required'});
    }
}
User.findById=function (userId) {
    return models.User.findById(userId,{include:{as:'roles',model:models.Role,attributes:['id','name']}});
}
User.setRole= async function (userId,roleId) {
    try {
        const user = await models.User.findById(userId);
        const role = await models.Role.findById(roleId);
        if(user != undefined && role != undefined){
            return user.addRole(role);
        }else{
            return Promise.reject('user or role is undefined');
        }
    }catch (e){
        return Promise.reject(e);
    }
}
User.removeRole= async function (userId,roleId) {
    try {
        const user = await models.User.findById(userId);
        const role = await models.Role.findById(roleId);
        if(user != undefined && role != undefined){
            return user.removeRole(role);
        }else{
            return Promise.reject('user or role is undefined');
        }
    }catch (e){
        return Promise.reject(e);
    }
}
function getPassword(str) {
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    str = str+'';
    var salt = "abcefghijkmnopqrstvwyz";
    md5.update(str+salt);
    return md5.digest('hex');
}

module.exports = User;