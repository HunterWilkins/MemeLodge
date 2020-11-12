module.exports = function(sequelize, DataTypes) {
    let Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        tag: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Post;
}