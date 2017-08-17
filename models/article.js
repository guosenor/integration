/**
 * Created by guosen on 2017/8/17.
 */
module.exports = function(sequelize, DataTypes) {
    var Article = sequelize.define("Article", {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
    });

    Article.associate = function(models) {
        Article.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey:'createById',
            as:'createBy'
        });
    }
    return Article;
};