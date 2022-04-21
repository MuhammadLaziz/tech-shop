import "./topbar.scss";
import Phone from "../../Assets/image//topbar/phone.png";
import Location from "../../Assets/image/topbar/location_on.png";
import Russia from "../../Assets/image/topbar/russia.png";
import Logo from "../../Assets/image/topbar/logo.png";
import bottom from '../../Assets/image/topbar/bottom.png'
import { SearchIcon, GalleryIcon } from "../../Assets/icons/icons";
import ShoppingCart from "../../Assets/image/topbar/shopping_cart.png";
import Heart from "../../Assets/image/topbar/heart.png";
import Sync from "../../Assets/image/topbar/sync_alt.png";
import Login from "../../Assets/image/topbar/login.png";

const TopBar = () => {
  return (
    <div className="top_bar">
      <div className="first_box">
        <ul className="first-list">
          <li className="first_item">
            <span style={{ cursor: "pointer" }}>Магазины</span>
            <span style={{ cursor: "pointer" }}>Оставить отзыв</span>
            <span style={{ cursor: "pointer" }}>Доставка</span>
          </li>
          <li className="second_item">
            <div className="contact" style={{ cursor: "pointer" }}>
              <img src={Phone} alt="" />
              <span>+998 97 778-17-08</span>
            </div>
            <div className="contact" style={{ cursor: "pointer" }}>
              <img src={Location} alt="" />
              <span>Ташкент</span>
            </div>
            <div className="contact" style={{ cursor: "pointer" }}>
              <img src={Russia} alt="" />
              <span>Рус</span>
              <img src={bottom} alt="" className="bottom"/>
            </div>
          </li>
        </ul>
        <hr />
      </div>
      <div className="second_box">
        <ul className="second_list">
          <li className="second_item-1">
            <img src={Logo} alt="" />
          </li>
          <li className="second_item-2">
            <form className="second_item-form">
              <SearchIcon />
              <input type="text" placeholder="Поиск по товарам" />
              <GalleryIcon />
            </form>
          </li>
          <li className="second_item-3">
            <div className="second_item-box">
              <img src={ShoppingCart} alt="" />
              <span>Корзина</span>
            </div>
            <div className="second_item-box">
              <img src={Heart} alt="" />
              <span>Избранные</span>
            </div>
            <div className="second_item-box">
              <img src={Sync} alt="" />
              <span>Сравнение</span>
            </div>
            <div className="second_item-box">
              <img src={Login} alt="" />
              <span>Войти</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="third_box">
        <ul className="third_list">
          <li className="third_item">
            <span style={{ cursor: "pointer" }}>Акции и скидки</span>
          </li>
          <li className="third_item">
            <span style={{ cursor: "pointer" }}>Смартфоны и гаджеты</span>
          </li>
          <li className="third_item">
            <span style={{ cursor: "pointer" }}>Телевизоры и аудио</span>
          </li>
          <li className="third_item">
            <span style={{ cursor: "pointer" }}>Техника для кухни</span>
          </li>
          <li className="third_item">
            <span style={{ cursor: "pointer" }}>Красота и здоровье</span>
          </li>
          <li className="third_item">
            <span style={{ cursor: "pointer" }}>Ноутбуки и компьютеры</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
