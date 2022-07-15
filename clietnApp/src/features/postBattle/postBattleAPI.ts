import { dataBase } from "../../data";

export const fetchPostbattleData = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/v1/postbattle");
    let data = await res.json();
    return data;
  } catch (error) {
    console.log("data", error);
    // hardcoded the database here for demo purpose
    return dataBase;
  }
};
