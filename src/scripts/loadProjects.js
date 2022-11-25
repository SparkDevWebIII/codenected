const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-east-1"
});

console.log("Writing entries to Project table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const projectData = 
  JSON.parse(fs.readFileSync('../../public/data/projects.json', 'utf8'));

projectData.forEach(function(projects) {
  const params = {
    TableName: "projects",
    Item: {
        "project_id": projects.project_id,
        "title": projects.title,
        "summary": projects.summary,
        "location" : projects.location,
        "dateCreated" : projects.dateCreated,
        "githubRepo": projects.githubRepo,
        "concept": projects.concept,
        "goal": projects.goal,
        "currentsystem":projects.currentsystem,
        "technologies": projects.technologies,
        "rolesNeeded": projects.rolesNeeded,
        "members": projects.members,
        "projectProgression": projects.projectProgression
    }
  };

  dynamodb.put(params, (err, data) => {
    if (err)
      console.error("Unable to load data into Projects table",
                    projects.title, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", projects.title, "to project table.")
  });
});