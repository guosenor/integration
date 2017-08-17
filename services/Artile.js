/**
 * Created by guosen on 2017/8/17.
 */
var models=require('../models');
var Article = {};
Article.create=function (form) {
    if(form.title&&form.content&&form.createById){
        return models.Article.create(form)
    }else{
        return Promise.reject({message:'title and content required'});
    }
};
Article.find=function (filter) {
    console.log(filter)
    return models.Article.findAll(filter)
}
module.exports = Article;