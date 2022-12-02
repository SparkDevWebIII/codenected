const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  region: "us-east-1",
});

console.log("Writing entries to Project Detail table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const projectData = JSON.parse(
  fs.readFileSync("../../public/data/projectDetail.json", "utf8")
);

projectData.forEach(function(projectDetail) {
  const params = {
    TableName: "projectDetail",
    Item: {
      project_id: projectDetail.project_id,
      title: projectDetail.title,
      projectImage: projectDetail.projectImage,
      projectImageAlt: projectDetail.projectImageAlt,
      websiteUrl: projectDetail.websiteUrl,
      summary: projectDetail.summary,
      location: projectDetail.location,
      dateCreated: projectDetail.dateCreated,
      email: projectDetail.email,
      githubRepo: projectDetail.githubRepo,
      concept: projectDetail.concept,
      goal: projectDetail.goal,
      currentsystem: projectDetail.currentsystem,
      technologies: projectDetail.technologies,
      rolesNeeded: projectDetail.rolesNeeded,
      members: projectDetail.members,
      projectProgression: projectDetail.projectProgression,
    },
  };
  console.log(params.Item);
  dynamodb.put(params, (err, data) => {
    if (err)
      console.error(
        "Unable to load data into table",
        projectDetail.title,
        ". Error: ",
        JSON.stringify(err, null, 2)
      );
    else console.log("Added", projectDetail.title, "to table.");
  });
});
