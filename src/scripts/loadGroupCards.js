const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  region: "us-east-1",
});

console.log("Writing entries to Group Card table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const groupData = JSON.parse(
  fs.readFileSync("../../public/data/groupCards.json", "utf8")
);

groupData.forEach(function(group) {
  const params = {
    TableName: "groupCards",
    Item: {
      group_id: group.group_id,
      title: group.title,
      location: group.location,
      members: group.members,
      description: group.description,
      link: group.link
    },
  };

  dynamodb.put(params, (err, data) => {
    if (err)
      console.error(
        "Unable to load data into table",
        group.title,
        ". Error: ",
        JSON.stringify(err, null, 2)
      );
    else console.log("Added", group.title, "to table.");
  });
});