import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";

import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import dataLocal from "./assets/data.json";
import AddForm from "./pages/AddForm";
import Basket from "./pages/Basket";

import { Api } from "./Api";
import Ctx from "./Ctx";
import Favorites from "./pages/Favorites";

const PATH = "/";
// const PATH = "/dogfood/";
// "homepage": "/dogfood/",
// "homepage": "./",

const dataHome = dataLocal;

const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];

const App = () => {
    let usr = localStorage.getItem("user8");
    if (usr) {
        usr = JSON.parse(usr);
    }
    const [user, setUser] = useState(usr);
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [visibleGoods, setVisibleGoods] = useState(goods);
    const [favorites, setFavorites] = useState([]);
    const [basket, setBasket] = useState(localStorage.getItem("basket8") ? JSON.parse(localStorage.getItem("basket8")) : []);

    useEffect(() => {
        if (token) {
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setVisibleGoods(data.products);
                    setGoods(data.products);
                })
            api.getUsers()
                .then(res => res.json())
                .then(data => {
                    setAuthors(data);
                })
        }
    }, [])

    useEffect(() => {
        setApi(new Api(token));
        let usr = localStorage.getItem("user8");
        if (usr) {
            usr = JSON.parse(usr);
        }
        setUser(usr);
    }, [token])

    useEffect(() => {
        if (!user) {
            localStorage.removeItem("token8");
            setToken(null);
        }
    }, [user])

    useEffect(() => {
        if (token) {
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setGoods(data.products);
                })
        }
    }, [api])
    useEffect(() => {
        setFavorites(goods.filter(el => {
            return el.likes && el.likes.includes(user._id);
        }))
    }, [goods])

    useEffect(() => {
    }, [visibleGoods])

    useEffect(() => {
        localStorage.setItem("basket8", JSON.stringify(basket));
    }, [basket])

    return (
        <Ctx.Provider value={{
            user: user,
            token: token,
            api: api,
            modalActive: modalActive,
            setUser: setUser,
            setToken: setToken,
            setApi: setApi,
            goods: goods,
            setModalActive: setModalActive,
            setGoods: setGoods,
            setVisibleGoods: setVisibleGoods,
            favorites: favorites,
            setFavorites: setFavorites,
            visibleGoods: visibleGoods,
            PATH: PATH,
            basket,
            setBasket,
            authors
        }}>
            <div className="wrapper">
                <Header />
                <main className="py-4">
                    <Routes>
                        <Route path={PATH} element={<Home />} />
                        <Route path={PATH + "catalog"} element={<Catalog />} />
                        <Route path={PATH + "profile"} element={<Profile />} />
                        <Route path={PATH + "catalog/:id"} element={<Product />} />
                        <Route path={PATH + "add"} element={<AddForm />} />
                        <Route path={PATH + "favorites"} element={<Favorites />} />
                        <Route path={PATH + "basket"} element={<Basket />} />
                    </Routes>
                </main>
                <Footer />
            </div>
            <Modal />
        </Ctx.Provider>
    )
}
export default App;
