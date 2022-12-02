export const getProject = (projectId) => {
  return fetch("https://r7fu8gohdd.execute-api.us-east-1.amazonaws.com/projectCards", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((projects) => {
      return projects.filter((p) => {
        return p.projectId === Number(projectId);
      })[0];
    });
};

export const getProjectList = () => {
  return fetch("./../data/projects.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};
