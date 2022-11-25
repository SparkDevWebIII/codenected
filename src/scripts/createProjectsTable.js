const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "projects",
  KeySchema: [
    // Partition Key
    { AttributeName: "project_id", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "title", KeyType: "RANGE"},
    { AttributeName: "location", KeyType: "String"}

  ],
  AttributeDefinitions: [
    { AttributeName: "project_id", AttributeType: "S" },
    { AttributeName: "title", AttributeType: "S" },
//   { AttributeName: "location", AttributeType: "S" },
//     { AttributeName: "description", AttributeType: "S" },
//     { AttributeName: "image", AttributeType: "S" },
//     { AttributeName: "totalMembers", AttributeType: "S" },
//     { AttributeName: "owner", AttributeType: "S" },  
//     { AttributeName: "member_id", AttributeType: "S" }
   ],
//   LocalSecondaryIndexes: [
//     {
//       IndexName: "ClassIndex",
//       KeySchema: [
//         { AttributeName: "project_id", KeyType: "HASH" },
//         { AttributeName: "member_id", KeyType: "RANGE" }
//       ],
//       Projection: {
//         ProjectionType: "KEYS_ONLY"
//       }
//     }
//   ], 
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});