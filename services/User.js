/**
 * Created by guosen on 2017/8/16.
 */
var models=require('../models');
var User={};
User.create=function (user) {
    if(user.password){
        user.password=getPassword(user.password);
    }
    return models.User.create(user);
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
function getPassword(str) {
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    str = str+'';
    var salt = "abcefghijkmnopqrstvwyz";
    md5.update(str+salt);
    return md5.digest('hex');
}

module.exports = User;