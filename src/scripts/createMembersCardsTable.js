const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "membersCards",
  KeySchema: [
    // Partition Key
    { AttributeName: "member_id", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "name", KeyType: "RANGE" },
  ],
  AttributeDefinitions: [
    { AttributeName: "member_id", AttributeType: "S" },
    { AttributeName: "name", AttributeType: "S" },
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: "AltIndex",
      KeySchema: [
        { AttributeName: "member_id", KeyType: "HASH" },
        { AttributeName: "name", KeyType: "RANGE" },
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY",
      },
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2));
  else
    console.log(
      "Created table with description: ",
      JSON.stringify(data, null, 2)
    );
});
