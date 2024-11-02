import { NavLink } from "react-router-dom";

const IsLoggedInSystem = () => {
    return ( 
        <div>
        <p>Вы не авторизованы.</p>
        <NavLink to="/login">Войти</NavLink> | <NavLink to="/register">Зарегистрироваться</NavLink>
      </div>
     );
}
 
export { IsLoggedInSystem };