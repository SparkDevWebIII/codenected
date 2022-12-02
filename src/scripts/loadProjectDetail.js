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

// "rolesNeeded": [
//   {
//     "position": "Project Manager",
//     "domain": "Software Development",
//     "description": "The project manager is responsible for the overall success of the project. They are responsible for the project schedule, budget, and quality. They are also responsible for the project team and the project environment. The project manager is the primary point of contact for the client and the project team.",
//   },
//   {
//     "position": "Software Developer",
//     "domain": "Software Development",
//     "description": "The software developer is responsible for the development of the software. They are responsible for the design, implementation, and testing of the software. They are also responsible for the documentation of the software.",
//   },
//   {
//     "position": "Software Tester",
//     "domain": "Software Development",
//     "description": "The software tester is responsible for the testing of the software. They are responsible for the testing of the software and the documentation of the testing results. They are also responsible for the testing environment.",
//   },
//   {
//     "position": "Software Architect",
//     "domain": "Software Development",
//     "description": "The software architect is responsible for the design of the software. They are responsible for the design of the software and the documentation of the design. They are also responsible for the design environment.",
//   }
// ]
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
