import React from "react";
import "./footer.css";
import {Link} from "react-router-dom"
import logo from "../Logo/logo.svg";

export default () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer_logo">
                <Link to="/">
                    <img src={logo} />
                </Link>
                <div className="footer_copy">
                    ©️ {year} "Интернет-магазин DogFood.ru"
                </div>
            </div>
            <nav className="footer_menu">
                <ul>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><a href="">Акции</a></li>
                    <li><a href="">Новости</a></li>
                    <li><a href="">Отзывы</a></li>
                </ul>
            </nav>
            <nav className="footer_menu">
                <ul>
                    <li><a href="">Оплата и доставка</a></li>
                    <li><a href="">Часто спрашивают</a></li>
                    <li><a href="">Обратная связь</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
            </nav>
            <div className="footer_contacts">
                <div className="contacts">
                    <p>Мы на связи</p>
                    <a className="phone" href="#">8 (999) 00-00-00</a>
                    <a className="email" href="#">info@mail.ru</a>
                </div>
            <div className="social-media">
                <a href="">
                    <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="">
                <i className="fa-brands fa-viber"></i>
                </a>
                <a href="">
                <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                <i className="fa-brands fa-vk"></i>
                </a>
            </div>
            </div>
        </footer>
    )
}

// © => &copy;
// &nbsp; - неразбиваемый пробел