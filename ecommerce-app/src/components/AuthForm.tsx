import React, { useState } from 'react';

interface AuthFormProps {
    title: string;
    onSubmit: (username: string, password: string, role?: 'admin' | 'client') => void;
    isRegister?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, onSubmit, isRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'admin' | 'client'>('client');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(username, password, role);
    };

    return (
        <div className="auth-form">
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                {isRegister && (
                    <select onChange={(e) => setRole(e.target.value as 'admin' | 'client')}>
                        <option value="client">Cliente</option>
                        <option value="admin">Administrador</option>
                    </select>
                )}
                <button type="submit">{title}</button>
            </form>
        </div>
    );
};

export default AuthForm;