import axios from "axios";

export const createBoard = async (data) => {
  const response = await axios.post("/api/boards", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const createList = async (data) => {
  const response = await axios.post("/api/lists", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const createCard = async (data) => {
  const response = await axios.post("/api/cards", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};
