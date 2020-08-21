module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const User = app.model.define('user',
        {
            userid: { type: app.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            username:{ type: app.Sequelize.STRING },
            sex: { type: app.Sequelize.STRING },
            userpass: { type: app.Sequelize.STRING }
        },
        {

            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return User;
}
