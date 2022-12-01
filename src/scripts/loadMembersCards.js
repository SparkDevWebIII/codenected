const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  region: "us-east-1",
});

console.log("Writing entries to Member Card table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const memberData = JSON.parse(
  fs.readFileSync("../../public/data/membersCards.json", "utf8")
);

memberData.forEach(function(member) {
  const params = {
    TableName: "membersCards",
    Item: {
      member_id: member.member_id,
      name: member.name,
      position: member.position,
      location: member.location,
      profileImage: member.profileImage,
    },
  };

  dynamodb.put(params, (err, data) => {
    if (err)
      console.error(
        "Unable to load data into table",
        member.name,
        ". Error: ",
        JSON.stringify(err, null, 2)
      );
    else console.log("Added", member.name, "to table.");
  });
});
