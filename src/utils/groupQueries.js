export const getGroupList = () => {
  return fetch(
    "https://r7fu8gohdd.execute-api.us-east-1.amazonaws.com/groupcards"
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};