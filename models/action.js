/**
 * Created by guosen on 2017/8/24.
 */
module.exports = function(sequelize, DataTypes) {
    var Action = sequelize.define("Action", {
        name: {type:DataTypes.STRING,unique:true},
        description: DataTypes.STRING
    },{
        'createdAt': false,
        'updatedAt': false
    });
    Action.associate = function(models) {
        Action.belongsToMany(models.Role, {
            onDelete: "CASCADE",
            through: {
                model: 'RoleAction',
            },
            foreignKey: 'actionId'
        });
        Action.belongsToMany(models.User, {
            onDelete: "CASCADE",
            through: {
                model: 'UserAction',
            },
            foreignKey: 'actionId'
        });
    }
    return Action;
};