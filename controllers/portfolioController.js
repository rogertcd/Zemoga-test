const AWS = require('aws-sdk');
const response = require('../response');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'portfolio';

exports.createOrUpdate = async (req, res) => {
    const idPortfolio = req.body.id;
    // console.log('idPortfolio', idPortfolio, 'params', req.headers.id);
    if (idPortfolio !== '' && req.body.name !== undefined && req.body.twitterUser !== undefined) {
        const newItem = {
            "id": idPortfolio,
            "experience": (req.body.experience === undefined) ? '' : req.body.experience,
            "imagePath": (req.body.imagePath === undefined) ? '' : req.body.imagePath,
            "name": req.body.name,
            "twitterUser": req.body.twitterUser,
            "email": (req.body.email === undefined) ? '' : req.body.email,
            "address": (req.body.address === undefined) ? '' : req.body.address,
            "phone": (req.body.phone === undefined) ? '' : req.body.phone,
            "zipCode": (req.body.zipCode === undefined) ? '' : req.body.zipCode
        }
        const params = {
            TableName: TABLE_NAME,
            Item: newItem
        }
        let respuesta = await dynamoClient.put(params).promise();
        response.success(req, res, respuesta, 200);
    } else {
        response.error(req, res, "Datos no válidos", 401);
    }
};

exports.getElementById = async (req, res) => {
    const idPortfolio = req.headers.id;
    if (idPortfolio !== '') {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: parseInt(idPortfolio)
            }
        }
        let respuesta = await dynamoClient.get(params).promise();
        response.success(req, res, respuesta, 200);
    } else {
        response.error(req, res, "Debe especificar un ID", 401);
    }
};