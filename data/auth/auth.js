export const login = ({ username, password }) => {
  if (username == "tso@gmail.com" && password == "User123**") {
    const jwt =
      "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6InRoYW5zb2Vvb0BnbWFpbC5jb20iLCJleHAiOjE2OTQ4NDMzMDcsImlhdCI6MTY5NDg0MzMwN30.hEN_LuzcM7YBBPhLbweT4ZGBWyvlWGCO7IyQ2pIufpc";
    const response = {
      data: {
        status: 200,
        jwt: jwt,
        message: "You've successfully logged in.",
      },
    };
    return response;
  } else {
    const response = {
      error: {
        status: 400,
        message: "Invalid identifier or password.",
      },
    };
    return response;
  }
};
