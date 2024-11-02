// Home.js
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isAuthenticated, clearToken } from './../utils/auth';
import { IsLogged } from '../components/IsLogged';
import { IsLoggedInSystem } from '../components/IsLoggedInSystem';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(isAuthenticated()); // Проверяем авторизацию при загрузке страницы
  }, []);

  const handleLogout = () => {
    clearToken();
    setIsLoggedIn(false); // Обновляем состояние
    navigate('/'); // Обновление главной страницы после выхода
  };

  return (
    <div>
      <h1>Добро пожаловать на домашнюю страницу!</h1>
      {isLoggedIn ? (
        <div>
          <IsLogged handleLogout={handleLogout}/>
        </div>
      ) : (
        <IsLoggedInSystem/>
      )}
    </div>
  );
};

export default HomePage;
