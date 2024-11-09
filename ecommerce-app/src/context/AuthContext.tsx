import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

interface AuthContextType {
    user: string | null;
    role: 'admin' | 'client' | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const [role, setRole] = useState<'admin' | 'client' | null>(null);

    const login = async (username: string, password: string) => {
        const response = await api.post('/auth/login', { username, password });
        localStorage.setItem('token', response.data.token);
        setUser(username);
        setRole('client'); // Cambiar según la respuesta
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setRole(null);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Decodifica el token para obtener el rol y el usuario, si es necesario
            setUser('existingUser');
            setRole('client');
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);