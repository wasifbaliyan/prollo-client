import axios from "axios";

export const createBoard = async (data) => {
  const response = await axios.post("/api/boards", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};
