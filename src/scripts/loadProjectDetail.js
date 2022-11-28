const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-east-1"
});

console.log("Writing entries to Project table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const projectData = 
  JSON.parse(fs.readFileSync('../../public/data/projectDetail.json', 'utf8'));

projectData.forEach(function(projectDetail) {
  const params = {
    TableName: "projectDetail",
    Item: {
        "project_id": projectDetail.project_id,
        "title": projectDetail.title,
        "description": projectDetail.description,
        "location" : projectDetail.location,
        "url" : projectDetail.url,
        "startDate": projectDetail.startDate,
        "endDate": projectDetail.endDate,
        "status": projectDetail.status,
        "manager": projectDetail.manager,
        "technologyUsed": projectDetail.technologyUsed,
        "image": projectDetail.image,
        "imageAlt": projectDetail.imageAlt,
        "projectDetails": projectDetail.projectDetails,
        "leadership": projectDetail.leadership,
        "members": projectDetail.members
    }
  };

  dynamodb.put(params, (err, data) => {
    if (err)
      console.error("Unable to load data into Projects table",
                    projectDetail.title, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", projectDetail.title, "to project table.")
  });
});