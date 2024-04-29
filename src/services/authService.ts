import { AUTH_LOGIN, AUTH_REGISTER } from "../components/enpoints/api";

interface Data {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

interface LoginData {
  username: string;
  password: string;
}

// Admin operations
export async function registerAdmin(admin: Data) {
  try {
    const response = await fetch(`${AUTH_REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    });

    const data = await response.json();
    const token = data.token;

    // Store token in local storage
    localStorage.setItem("token", token);
    console.log("Token stored:", token);
  } catch (error) {
    console.log("Error registering admin", error);
  }
}

// User operations
export async function loginUser(loginData: LoginData) {
  try {
    const response = await fetch(`${AUTH_LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loginData }),
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

export async function registerUser(user: Data) {
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

export function logoutUser(): void {
  try {
    localStorage.removeItem("token");

    console.log("User logged out succesfully.");
  } catch (error) {
    console.error("Error when closing session", error);
  }
}