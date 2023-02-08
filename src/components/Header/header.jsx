import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Search from "../Search/search";
import Ctx from "../../Ctx";
import { PlusCircle, HeartFill, Cart2 } from "react-bootstrap-icons";
import {Badge} from "react-bootstrap";
import Basket from "../../pages/Basket";

import "./header.css";

import logo from "../img/logo.svg";
import Favorites from "../../pages/Favorites";

export default () => {
    const {user, setUser, setModalActive, PATH, favorites,  basket} = useContext(Ctx);
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
    <div className="header-top">
        <Link className="logo" to={PATH}>
            <img src={logo} />
        </Link>
        <Search/>
        <nav className="menu">
            {user && <Link to={PATH + "add"}><PlusCircle style={{fontSize: "20px"}}/></Link>}
            {user && <Link to={PATH + "favorites"} className="badge-link">
                <HeartFill style={{fontSize: "20px"}}/>
                <Badge bg="light" text="dark">{favorites.length}</Badge>
            </Link>}
            {user && <Link to={PATH + "basket"} className="badge-link">
                <Cart2 style={{fontSize: "20px"}}/>
                <Badge bg="light" text="dark">{basket.reduce((acc, el) => acc + el.cnt, 0)}</Badge>
            </Link>}
            {user && user.name && <Link to={PATH + "profile"}>{user.name}</Link>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {/* {user && <a href="" onClick={logOut}>Выйти</a>} */}
        </nav>
        </div>
        <div className="header-bottom">
            <h1>Kакомства для собак</h1>
            <h3>Всегда свежие лакомства ручной работы с доставкой на дом по России</h3>
        <Link className="btn btn-secondary btn-lg" to="/catalog">
            Каталог
        </Link>
    </div>
</header>
}

// header, footer, main, section, nav, aside, article => div