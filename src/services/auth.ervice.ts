import { getUserToken, logout } from "./session.service";

export const getAuthenticatedUser = async () => {
  const userToken = await getUserToken();
  console.log(userToken);

  if (userToken === undefined) {
    return null;
  }
  try {
    const response = await fetch("http://localhost:5000/auth", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    const data = await response.json();
    console.log("data" + JSON.stringify(data));

    return data;
  } catch (error) {
    console.error(error);
    throw await logout();
  }
};
