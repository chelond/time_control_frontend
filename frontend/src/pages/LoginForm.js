import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); // Сохраняем токен, если сервер возвращает его
            onLogin(); // Переход на домашнюю страницу
        } else {
            console.error('Ошибка логина');
        }
    };

    const onLogin = () => {
        navigate('/')
    }

    return (
        <div>
            <h2>Логин</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя пользователя:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Пароль:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default LoginForm;
