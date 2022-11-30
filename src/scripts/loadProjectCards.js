const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  region: "us-east-1",
});

console.log("Writing entries to Project Card table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const projectData = JSON.parse(
  fs.readFileSync("../../public/data/projectCards.json", "utf8")
);

projectData.forEach(function(projects) {
  const params = {
    TableName: "projects",
    Item: {
      project_id: projects.project_id,
      title: projects.title,
      summary: projects.summary,
      location: projects.location,
      members: projects.members,
      domain: projects.domain,
      imageUrl: projects.image,
    },
  };

  dynamodb.put(params, (err, data) => {
    if (err)
      console.error(
        "Unable to load data into table",
        projects.title,
        ". Error: ",
        JSON.stringify(err, null, 2)
      );
    else console.log("Added", projects.title, "to table.");
  });
});
