/**
 * Created by guosen on 2017/8/22.
 */
const Article= require('../services/Artile');
module.exports = {
    create: async function (req,res,next) {
        if(req.token&&req.token.id){
            try {
                const form =req.body;
                form.createById=req.token.id;
                const result = await Article.create(form);
                res.send(result);
            }catch (e){
                res.statusCode = 422;
                res.send({code:422,message:e.message});
            }

        }else{
            res.statusCode = 401;
            res.send({code:401,message:'please login'});
        }
    },
    find: async function(req,res,next){
        const filter = req.query.filter;
        if(filter){
            try {
                const result= await Article.find(filter);
                res.send(result);
            }catch (e){
                res.statusCode=422;
                res.send({code:422,message:e.message});
            }
        }else{
            res.send([]);
        }
    }
};