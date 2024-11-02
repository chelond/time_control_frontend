const IsLogged = ({handleLogout}) => {
    return ( 
        <div>
            <p>Вы вошли в систему.</p>
            <button onClick={handleLogout}>Выйти</button>
      </div>
     );
}
 
export { IsLogged };