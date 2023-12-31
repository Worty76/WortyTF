import axios from "axios";

const signIn = async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/api/user/login",
      user,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let data = {
      user: JSON.stringify(response.data.data),
      token: response.data.token,
    };
    return data;
  } catch (error) {
    return error;
  }
};

const signUp = async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/api/user/register",
      user,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return JSON.stringify(response.data.data);
  } catch (error) {
    return error;
  }
};

const changeAvatar = async (params, credentials, imageData) => {
  try {
    let response = await axios.put(
      `http://localhost:8000/api/user/${params.id}/changeAvt`,
      imageData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-header": credentials.t,
        },
      }
    );
    return JSON.stringify(response.data.data);
  } catch (error) {
    return error;
  }
};

export { signIn, signUp, changeAvatar };
