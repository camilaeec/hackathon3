import React from 'react';
import { useAuth } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const RegisterPage: React.FC = () => {
    const { login } = useAuth();

    const handleRegister = async (username: string, password: string, role: 'admin' | 'client') => {
        try {
            await login(username, password);
            alert("Usuario registrado exitosamente");
        } catch (error) {
            alert('Error en el registro');
        }
    };

    return <AuthForm title="Registrarse" onSubmit={handleRegister} isRegister />;
};

export default RegisterPage;