import React from 'react';
import { useAuth } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const LoginPage: React.FC = () => {
    const { login } = useAuth();

    const handleLogin = async (username: string, password: string) => {
        try {
            await login(username, password);
            alert("Inicio de sesión exitoso");
        } catch (error) {
            alert('Error en el inicio de sesión');
        }
    };

    return <AuthForm title="Iniciar Sesión" onSubmit={handleLogin} />;
};