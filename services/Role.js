/**
 * Created by guosen on 2017/8/24.
 */
var models=require('../models');
var Role=new Object();
Role.create = function (form) {
    if(form.name && form.description){
        return models.Role.create(form);
    }else{
        return Promise.reject('name and description is required');
    }
}
Role.deleteById = async function (id) {
    try {
        const role= await models.Role.findById(id);
        if(role){
            const result = await role.destory();
            return Promise.resolve();
        }else{
            return Promise.reject('role not found');
        }
    }catch (e){
        return Promise.reject(e);
    }
}
Role.modify = async function (form) {
   if(form.id){
       const role= await models.Role.findById(form.id);
       if(role){
           if(form.name){
               role.name=form.name;
           }
           if(form.description){
               role.description=form.description;
           }
           const result = await role.save();
           return Promise.resolve(result);
       }else{
           return Promise.reject('role not found');
       }
   }else{
       return Promise.reject('id is required');
   }
}
Role.getActionByRoleIds =  function (ids) {
   return models.Action.findAll({include:{
        model:models.Role,
        where:{id:{$in:ids}}
    }})
}
module.exports = Role;