import { useEffect } from "react";

export async function getData(apiExtension) {
  return await fetch(
    `https://r7fu8gohdd.execute-api.us-east-1.amazonaws.com/${apiExtension}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("Error: " + error);
    })
    .finally(() => {
      console.log("Finished load");
    });
}
