/**
 * Created by guosen on 2017/8/16.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {type:DataTypes.STRING,unique:true},
        password: DataTypes.STRING
    },);
    User.associate = function(models) {
        User.hasMany(models.Article,{foreignKey:'createById',as:'articles'});
        User.belongsToMany(models.Role, {
            onDelete: "CASCADE",
            through: {
                model: 'RoleMapping',
            },
            foreignKey: 'userId',
            as:'roles'
        });
        User.belongsToMany(models.Action, {
            onDelete: "CASCADE",
            through: {
                model: 'UserAction',
            },
            foreignKey: 'userId',
            as:'actions'
        });
    };
    return User;
};