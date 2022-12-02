export const getMemberDetail = (memberId) => {
  return fetch("https://r7fu8gohdd.execute-api.us-east-1.amazonaws.com/memberdetails")
    .then((response) => response.json())
    .then((memberCard) => {
      return memberCard.filter((p) => {
        return p.member_id === memberId;
      })[0];
    });
};
