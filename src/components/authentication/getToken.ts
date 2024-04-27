import { AUTH_LOGIN, AUTH_REGISTER } from "../enpoints/url";

export async function loginUser(username: string, password: string) {
  try {
    const response = await fetch(`${AUTH_LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    const token = data.token;

    // Almacenar el token en el almacenamiento local (localStorage)
    localStorage.setItem("token", token);

    console.log("Token almacenado:", token);
  } catch (error) {
    console.log("Error al obtener el token:", error);
  }
}

export async function registerUser(user: {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}) {
  try {
    const response = await fetch(`${AUTH_REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    const token = data.token;

    // Store the token in local storage
    localStorage.setItem("token", token);

    console.log("Token stored:", token);
  } catch (error) {
    console.log("Error registering user:", error);
  }
}

