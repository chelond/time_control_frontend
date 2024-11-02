import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            onRegister(); // Переход на страницу логина
        } else {
            console.error('Ошибка регистрации');
        }
    };

    const onRegister = () =>{
        navigate('/login');
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя пользователя:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Электронная почта:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Пароль:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
