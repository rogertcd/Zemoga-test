const { Model, Op, sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class portfolio extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    portfolio.init({
        'id': { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        'experience': { type: DataTypes.STRING(255), allowNull: true },
        'imagePath': { type: DataTypes.STRING(255), allowNull: true },
        'name': { type: DataTypes.STRING(255), allowNull: true },
        'twitterUser': { type: DataTypes.STRING(255), allowNull: true },
        'email': { type: DataTypes.STRING(255), allowNull: true },
        'address': { type: DataTypes.STRING(255), allowNull: true },
        'phone': { type: DataTypes.STRING(255), allowNull: true },
        'zipCode': { type: DataTypes.STRING(255), allowNull: true },
        'image_path': { type: DataTypes.STRING(255), allowNull: true },
        'twitter_user': { type: DataTypes.STRING(255), allowNull: true },
        'zip_code': { type: DataTypes.STRING(255), allowNull: true }
    }, {
        sequelize,
        modelName: 'portfolio',
        timestamps: false,
        freezeTableName: true,
        underscored: false
    });
    return portfolio;
};

exports.listAll =  (portfolio) => {
    return new Promise((resolve, reject) => {
        portfolio.findAll ({
            'limit': 0,
            'raw': true
        })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                console.log('[controllerUsuario] completeList, error en los datos');
                reject("Error desconocido");
            });
    })
}