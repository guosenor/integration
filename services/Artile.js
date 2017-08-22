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
Article.find=function (params) {
    let filter = {};
    try {
        if(typeof params=='string'){
            filter= JSON.parse(params);
        }
    }catch (e){
        filter={};
    }
    if(filter.limit){
        if(typeof filter.limit=='number'){
            if(filter.limit>24){
                filter.limit=24;
            }
        }else{
            filter=24;
        }
    }else {
        filter.limit=24;
    }
    filter.include=[{
        as:"createBy",
        model:models.User,
        attributes:['id','username','createdAt']
    }]
    return models.Article.findAll(filter);
}
module.exports = Article;