const { Router } = require('express');
const router = Router();
const portfolioController = require('../controllers/portfolioController');

/**
 * @api {get} /api/portfolio/find/ Datos portafolio
 * @apiName getElementById
 * @apiVersion 1.0.0
 * @apiGroup Portfolio
 * @apiHeader {Number} id Identificador del registro
 * @apiSuccess {String} error '' = Sin errores, 'Descripción del error' = Con errores
 * @apiSuccess {Object[]} body
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 OK
 *    [{
 *      'error': '',
 *      'body': {
 *          "Item":{
 *              "imagePath": "",
 *              "experience": "Ninguna",
 *              "twitterUser": "vanne",
 *              "address": "Tarija",
 *              "id": 3,
 *              "email": "vanessa@gmail.com",
 *              "zipCode": "None",
 *              "phone": "",
 *              "name": "Vanessa"
 *           }
 *      }
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 *    HTTP/1.1 400 Bad request
 *    HTTP/1.1 401 Unauthorized
 *    HTTP/1.1 403 Forbidden
 *    HTTP/1.1 404 Not found
 *    HTTP/1.1 405 Method not allowed
 */
router.get('/api/portfolio/find/', portfolioController.getElementById);

/**
 * @api {put} /api/portfolio/update/ Actualizar portafolio
 * @apiName createOrUpdate
 * @apiVersion 1.0.0
 * @apiGroup Portfolio
 * @apiBody {Number} id Identificador del registro
 * @apiBody {String} experience Experiencia de trabajo del usuario
 * @apiBody {String} imagePath URL de la fotografía del usuario
 * @apiBody {String} name Nombre completo del usuario
 * @apiBody {String} twitterUser Usuario de Twitter
 * @apiBody {String} email Email del usuario
 * @apiBody {String} address Dirección del domicilio del usuario
 * @apiBody {String} phone Teléfono/celular del usuario
 * @apiBody {String} zipCode Código postal del usuario
 * @apiSuccess {String} error '' = Sin errores, 'Descripción del error' = Con errores
 * @apiSuccess {Object[]} body
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      'error': '',
 *      'body': { }
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 *    HTTP/1.1 400 Bad request
 *    HTTP/1.1 401 Unauthorized
 *    HTTP/1.1 403 Forbidden
 *    HTTP/1.1 404 Not found
 *    HTTP/1.1 405 Method not allowed
 */
router.put('/api/portfolio/update/', portfolioController.createOrUpdate);

/**
 * @api {post} /api/portfolio/create/ Crear portafolio
 * @apiName createOrUpdate
 * @apiVersion 1.0.0
 * @apiGroup Portfolio
 * @apiBody {Number} id Identificador del registro
 * @apiBody {String} experience Experiencia de trabajo del usuario
 * @apiBody {String} imagePath URL de la fotografía del usuario
 * @apiBody {String} name Nombre completo del usuario
 * @apiBody {String} twitterUser Usuario de Twitter
 * @apiBody {String} email Email del usuario
 * @apiBody {String} address Dirección del domicilio del usuario
 * @apiBody {String} phone Teléfono/celular del usuario
 * @apiBody {String} zipCode Código postal del usuario
 * @apiSuccess {String} error '' = Sin errores, 'Descripción del error' = Con errores
 * @apiSuccess {Object[]} body
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 OK
 *    [{
 *      'error': '',
 *      'body': {
 *          "Item":{
 *              "imagePath": "",
 *              "experience": "Ninguna",
 *              "twitterUser": "vanne",
 *              "address": "Tarija",
 *              "id": 3,
 *              "email": "vanessa@gmail.com",
 *              "zipCode": "None",
 *              "phone": "",
 *              "name": "Vanessa"
 *           }
 *      }
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 *    HTTP/1.1 400 Bad request
 *    HTTP/1.1 401 Unauthorized
 *    HTTP/1.1 403 Forbidden
 *    HTTP/1.1 404 Not found
 *    HTTP/1.1 405 Method not allowed
 */
router.post('/api/portfolio/create/', portfolioController.createOrUpdate);

module.exports = router;
