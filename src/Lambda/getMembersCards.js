'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region:"us-east-1"});

const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context)=>{

    let responseBody = "";
    let statusCode = 0;

    const { member_id } = JSON.parse(event.body);

    const params = {
        TableName: "membersCards",
        Key: {
            member_id: member_id
        }
    }
    try{
        const data = await db.get(params).promise();
        console.log(data);
    }catch(err){
        console.log(err);
    }
} 