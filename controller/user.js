/**
 * Created by guosen on 2017/8/18.
 */
const User= require('../services/User');
module.exports = {
    create: async (req,res,next) => {
        try {
            const from = req.body;
            const result = await User.create(from);
            res.send({status:'success'});
        }catch (e){
            res.statusCode=422;
            res.json({message:e.message});
        }
    }
}