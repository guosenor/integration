/**
 * Created by guosen on 2017/8/24.
 */
module.exports = function(sequelize, DataTypes) {
    var Action = sequelize.define("Action", {
        name: {type:DataTypes.STRING,unique:true},
        description: DataTypes.STRING
    });
    Action.associate = function(models) {
        Action.belongsToMany(models.Role, {
            through: {
                model: 'RoleAction',
            },
            foreignKey: 'actionId'
        });
    }
    return Action;
};