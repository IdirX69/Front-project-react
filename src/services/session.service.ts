import Cookies from "js-cookie";

// Fonctions pour gérer les cookies
const getSession = async (sessionName: string) => {
  return Cookies.get(sessionName);
};

export const getUserToken = async () => {
  return getSession("userToken");
};

export const commitUserToken = async ({ userToken }: { userToken: string }) => {
  // Stocker le token dans les cookies
  Cookies.set("userToken", userToken, { expires: 1 }); // 1 jour
  // Retourner les en-têtes de cookies pour les réponses côté serveur
  return `userToken=${userToken}; Path=/; Expires=${new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000
  ).toUTCString()}`;
};

export const logout = async () => {
  // Supprimer le cookie en le réglant avec une date passée
  Cookies.remove("userToken");
  // Retourner les en-têtes de cookies pour les réponses côté serveur
  return `userToken=; Path=/; Expires=${new Date(0).toUTCString()}`;
};

export const authenticateUser = async ({
  userToken,
}: {
  userToken: string;
}) => {
  const createdSession = await commitUserToken({ userToken });
  // window.location.href = "/";
  return {
    headers: {
      "Set-Cookie": createdSession,
    },
  };
};
