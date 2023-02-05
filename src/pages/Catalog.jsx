import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { EmojiFrown, SortNumericDown, SortNumericUp } from "react-bootstrap-icons";
import Ctx from "../Ctx";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";
import "./style.css";

export default () => {
    const { visibleGoods, user, PATH } = useContext(Ctx);
    const [sortGoods, setSortGoods] = useState(visibleGoods);
    const paginate = usePagination(sortGoods, 12);
    const [btnType, setBtnType] = useState("");
    let st = {
        display: "flex",
        gap: "10px"
    }

    const updSort = (e) => {
        let el = e.currentTarget;
        let flag = false;
        if (el.classList.contains("sort")) {
            el.classList.remove("sort");
            setBtnType("");
            flag = true;
        } else {
            el.classList.add("sort");
            setBtnType(el.title);
        }
        if (flag) {
            setSortGoods(visibleGoods);
        } else {
            let data = [...visibleGoods];
            switch (el.title) {
                case "down":
                    data.sort((a, b) => a.price - b.price);
                    break;
                case "up":
                    data.sort((a, b) => b.price - a.price);
                    break;
                case "new":
                    data = data.filter(d => d.tags.includes("new"));
                    break;
                case "sale":
                    data = data.filter(d => d.discount > 0);
                    break;
            }
            setSortGoods(data);
        }
    }
    useEffect(() => {
        if (sortGoods.length === 0) {
            setSortGoods(visibleGoods);
        }
    }, [visibleGoods]);

    return <>
        {visibleGoods.length > 0
            ? <>
                <h1>Каталог товаров</h1>
                <div style={st}>
                    <button className={`btn ${btnType === "up" ? "sort" : ""}`} title="up" onClick={updSort}><SortNumericUp /> цены</button>
                    <button className={`btn ${btnType === "down" ? "sort" : ""}`} title="down" onClick={updSort}><SortNumericDown /> цены</button>
                    <button className={`btn ${btnType === "new" ? "sort" : ""}`} title="new" onClick={updSort}>новинки</button>
                    <button className={`btn ${btnType === "sale" ? "sort" : ""}`} title="sale" onClick={updSort}> скидки</button>
                </div>
                <Pagination hook={paginate} />
                <div className="cards">
                    {paginate.setPageData().map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
                        <Card key={"card_" + i} {...el} />
                    </Link>)}
                </div>
                <Pagination hook={paginate} />
            </>
            : <div className="empty-block">
                <EmojiFrown />
                <p>Простите, по вашему запросу товаров не найдено</p>
                <Link to="/" className="btn">На главную</Link>
            </div>
        }
    </>
}