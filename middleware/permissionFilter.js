/**
 * Created by guosen on 2017/8/25.
 */

module.exports=function (method) {
    return function (req, res, next) {
        let isHave = false;
        if (req.Actions) {
            req.Actions.forEach(function (item) {
                if (item.name == method) {
                    isHave = true;
                }
            });
        }
        if (isHave) {
            next();
        } else {
            res.statusCode = 401;
            res.send("no permission to " + method)
        }
    }
}