'use strict';

const AWS = require("aws-sdk");

const fetchItens = async (event) =>{

    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    let itens;

    try{
        const results = await dynamoDB.scan({
            TableName: "ItemTableNew"
        }).promise();
        itens = results.itens
    } catch (error){

       console.log(error)
    } 

    return {
        statusCode: 200,
        body: JSON.stringify(itens),
    };
}

module.exports = {
    handler: fetchItens,
};