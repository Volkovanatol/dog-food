import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Search from "../Search/search";
import "./header.css";
import Ctx from "../../Ctx";

export default () => {
    const {user, setUser, setModalActive, PATH, favorites} = useContext(Ctx);
    // хук состояния [свойство, функция в качестве аргумента которой передается новое значение нашего свойства] = useState(аргумент - изначальное значение свойства)
    // const [user, setUser] = useState(localStorage.getItem("user8"));

    // let user = localStorage.getItem("user8");
    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <Link className="logo" to="/">DogFood</Link>
        <Search/>
        {/* <input type="search" placeholder="Поиск..." className="search"/> */}
        <nav className="menu">
            {/* true && true */}
            {user && user.name && <Link to="/profile">{user.name}</Link>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}

// header, footer, main, section, nav, aside, article => div