/**
 * Created by guosen on 2017/8/16.
 */
var models=require('../models');
var User={};
User.create=function (user) {
    return models.User.create(user);
}
module.exports = User;