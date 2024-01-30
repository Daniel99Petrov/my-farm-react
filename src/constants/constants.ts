export const BASE_URL = 'http://localhost:3000';
export const HEADERS = {
          Authorization: `Bearer  ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        }