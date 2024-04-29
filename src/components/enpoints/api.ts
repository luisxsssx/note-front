// Admin operations
export const ADMIN_REGISTER = "http://localhost:8080/auth/register/admin";
export const GET_USR = "http://localhost:8080/admin/usr";
export const UPADATE_USR = "http://localhost:8080/admin/usr/{id}";
export const DELETE_USR = "http://localhost:8080/admin/dl/{id}";

// User operations
export const AUTH_LOGIN = "http://localhost:8080/auth/login";
export const AUTH_REGISTER = "http://localhost:8080/auth/register/user";

// Create notes with user
export const CREATE_NOTE = "http://localhost:8080/note/sv";
export const READ_NOTE = "http://localhost:8080/note/read";
export const UPADATE_NOTE = "http://localhost:8080/note/upd/{id}";
export const DELETE_NOTE = "http://localhost:8080/note/dl/{id}";