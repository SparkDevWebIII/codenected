const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  region: "us-east-1",
});

console.log("Writing entries to Member Detail table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const memberData = JSON.parse(
  fs.readFileSync("../../public/data/memberDetail.json", "utf8")
);

memberData.forEach(function(memberDetail) {
  const params = {
    TableName: "memberDetail",
    Item: {
      member_id: memberDetail.member_id,
      name: memberDetail.name,
      about: memberDetail.about,
      position: memberDetail.position,
      location: memberDetail.location,
      dateCreated: memberDetail.dateCreated,
      email: memberDetail.email,
      skills: memberDetail.skills,
      projects: memberDetail.projects,
      groups: memberDetail.groups,
      profileImage: memberDetail.profileImage,
    },
  };
  console.log(params.Item);
  dynamodb.put(params, (err, data) => {
    if (err)
      console.error(
        "Unable to load data into table",
        memberDetail.name,
        ". Error: ",
        JSON.stringify(err, null, 2)
      );
    else console.log("Added", memberDetail.name, "to table.");
  });
});
