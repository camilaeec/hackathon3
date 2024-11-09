const BASE_URL = "https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1";
import axios from 'axios';

export const registerUser = async (username: string, password: string, role: string) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
    });
    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }
    return response.json();
};

export const loginUser = async (username: string, password: string) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }
    return response.json();
};

const api = axios.create({
    baseURL: BASE_URL,  // Reemplaza con la URL correcta de tu API
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;

// Puedes añadir más funciones para otros endpoints, como obtener productos, gestionar el carrito, etc.
