const Sequelize = require('sequelize');
const portfolio = require('../models').portfolio;
const response = require('../response');

exports.create = (req, res) => {
    return portfolio.create ({
        experience: req.params.experience,
        imagePath: req.params.imagePath,
        name: req.params.name,
        twitterUser: req.params.twitterUser,
        email: req.params.email,
        address: req.params.address,
        phone: req.params.phone,
        zipCode: req.params.zipCode,
        image_path: req.params.image_path,
        twitter_user: req.params.twitter_user,
        zip_code: req.params.zip_code
    })
        .then((data) => {
            response.success(req, res, data, 201);
            // res.status(200).send(data)
        })
        .catch((error) => {
            console.log('[controllerUsuario] create, error en los datos');
            response.error(req, res, 'Internal error', 400, error);
            // res.status(400).send(error)
        });
};

exports.list = (req, res) => {
    return portfolio.findAll ({
    })
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((error) => {
            console.log('[controllerUsuario] list, error en los datos');
            // console.log('rrrr' + error);
            response.error(req, res, 'Internal error', 400, error);
            // res.status(400).send(error)
        });
};

exports.find = (req, res) => {
    return portfolio.findAll ({
        where: {
            id: req.params.id,
        }
    })
        .then((data) => {
            response.success(req, res, data, 200);
            // res.status(200).send(data)
        })
        .catch((error) => {
            console.log('[controllerUsuario] find, error en los datos');
            response.error(req, res, 'Internal error', 400, error);
            // res.status(400).send(error)
        });
};

exports.completeList = () => {
    return new Promise((resolve, reject) => {
        portfolio.findAll ({
            raw: true
        })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                console.log('[controllerUsuario] completeList, error en los datos');
                reject("Error desconocido");
            });
    });
};

exports.getDataUser = (idUsuario) => {
    return new Promise((resolve, reject) => {
        portfolio.findOne ({
            where: {
                id: idUsuario,
            },
            raw: true
        })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                console.log('[controllerUsuario] getDataUser, error en los datos');
                reject("Error desconocido");
            });
    });
};


// module.exports = {
//     create: create,
//     list: list,
//     find: find
// };

// module.exports = {
//     create(req, res) {
//         return portfolio
//             .create ({
//                 username: req.params.username,
//                 status: req.params.status
//             })
//             .then(portfolio => res.status(200).send(portfolio))
//             .catch(error => res.status(400).send(error))
//     },
//     list(_, res) {
//         return portfolio.findAll({})
//             .then(portfolio => res.status(200).send(portfolio))
//             .catch(error => res.status(400).send(error))
//     },
//     find (req, res) {
//         return portfolio.findAll({
//             where: {
//                 id: req.params.id,
//             }
//         })
//             .then(portfolio => res.status(200).send(portfolio))
//             .catch(error => res.status(400).send(error))
//     },
// };