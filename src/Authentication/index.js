import { createAuthProvider } from "react-token-auth";

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  onUpdateToken: (token) =>
    fetch("/api/refresh", {
      method: "POST",
      body: token.access_token,
    }).then((response) => response.json()),
});
