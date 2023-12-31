import axios from "axios";

const create = async (credentials, post) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/api/post/create",
      post,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-header": credentials.t,
        },
      }
    );
    return JSON.stringify(response.data.data);
  } catch (error) {
    return error;
  }
};

export { create };
