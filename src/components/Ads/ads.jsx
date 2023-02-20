import React from "react";
import "./ads.css";
import banner from "./img/banner.png";
import pic from "./img/dogs.png";

export default () => {
    return <div className="promo">
      <h2>Подарок за первый заказ!</h2> 
      <img src={banner} alt="Мяч" />
        <img src={pic} alt="Собачки" />
       
    </div>
}