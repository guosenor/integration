/**
 * Created by guosen on 2017/8/17.
 */
import test from 'ava';
var User =require('../../services/User');
var Article=require('../../services/Artile');
var models=require('../../models');

test.serial(t => {
    return User.create({username: "guosen", password: "guosen"})
        .then((result) => {
            t.is(result.username, 'guosen');
            t.pass();
        })
        .catch((e) => {
            console.log(e);
            t.is(e, null);
            t.pass();
        })
})
var userId;
test.serial(t => {
    return User.login({username: "guosen", password: "guosen"})
        .then((result) => {
            userId=result.id;
            t.pass();
        })
        .catch((e) => {
            console.log(e);
            t.is(e, null);
            t.pass();
        })
})
var articleId;
test.serial(t => {
    return Article.create({title: "guosen", content: "guosen",createById:userId})
        .then((result) => {
        articleId=result.id;
            t.pass();
        })
        .catch((e) => {
            console.log(e);
            t.is(e, null);
            t.pass();
        })
})
test.serial(t => {
    return Article.find({
      where:{
          id:1,
      },
        include: [{
          as:"createBy",
          model:models.User,
          attributes:['id','username','createdAt']
        }]
      })
        .then((result) => {
            console.log(JSON.stringify(result));
            t.pass();
        })
        .catch((e) => {
            console.log(e);
            t.is(e, null);
            t.pass();
        })
})