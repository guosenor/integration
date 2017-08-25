/**
 * Created by guosen on 2017/8/22.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("Role", {
        name: {type:DataTypes.STRING,unique:true},
        description: DataTypes.STRING
    });
    Role.associate = function(models) {
        Role.belongsToMany(models.User, {
            onDelete: "CASCADE",
            through: {
                model: 'RoleMapping',
            },
            foreignKey: 'roleId'
        });
        Role.belongsToMany(models.Action, {
            onDelete: "CASCADE",
            through: {
                model: 'RoleAction',
            },
            foreignKey: 'roleId'
        });
    };
    return Role;
};