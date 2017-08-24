/**
 * Created by guosen on 2017/8/24.
 */
const Role= require('../services/Role');
module.exports = {
    create: async function (req,res,next) {
        try {
            const params = req.body;
            const result = await Role.create(params);
            res.send(result)
        }catch(e){
            res.statusCode=422;
            res.send({code:422,message:e.message})
        }
    },
    modify: async function (req,res,next) {
        try {
            const params = req.body;
            const result = await Role.modify(params);
            res.send(result)
        }catch(e){
            res.statusCode=422;
            res.send({code:422,message:e.message})
        }
    },
    deleteById: async function (req,res,next) {
        try {
            const id = req.param.id;
            const result = await Role.deleteById(id);
            res.send({status:'success'});
        }catch(e){
            console.log(e);
            res.statusCode=422;
            res.send({code:422,message:e})
        }
    }
}