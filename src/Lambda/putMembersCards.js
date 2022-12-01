const AWS = require('aws-sdk');
AWS.config.update({region:"us-east-1"});

const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context)=>{

    const { member_id, name, location, position } = JSON.parse(event.body);

    const params = {
        TableName: "membersCards",
        Item: {
            member_id: member_id,
            name: name,
            location: location,
            position: position
        }
    }
    try{
        const data = await db.put(params).promise();
        console.log(data);
    }catch(err){
        console.log(err);
    }
} 