export const getProject = (project_id) => {
  return fetch("https://r7fu8gohdd.execute-api.us-east-1.amazonaws.com/projectDetail")
    .then((response) => response.json())
    .then((projects) => {
      return projects.filter((p) => {
        console.log(p);
        return Number(p.project_id) === Number(project_id);
      })[0];
    });
};

export const getProjectList = () => {
  return fetch("https://r7fu8gohdd.execute-api.us-east-1.amazonaws.com/projectCards")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};