import './footer.scss'
import payme from '../../Assets/image/footer/payme.png'
import humo from '../../Assets/image/footer/humo.png'
import uzcard from '../../Assets/image/footer/uzcard.png'
import linkedIn from '../../Assets/image/footer/linkedin.png'
import instagram from '../../Assets/image/footer/instagram.png'
import tweeter from '../../Assets/image/footer/twitter.png'
import facebook from '../../Assets/image/footer/facebook.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <ul className="footer_top_list">
                <li className="footer_top_item">
                    <a href="\">Компания</a>
                    <ul className="footer_top_sub_list">
                        <li className="footer_top_sub_item">
                            <a href="\">О компании</a>
                        </li>
                        <li className="footer_top_sub_item">
                            <a href="\">Адреса магазинов</a>
                        </li>
                    </ul>
                </li> 
                <li className="footer_top_item">
                    <a href="\">Информация</a>
                    <ul className="footer_top_sub_list">
                        <li className="footer_top_sub_item">
                            <a href="\">Рассрочка</a>
                        </li>
                        <li className="footer_top_sub_item">
                            <a href="\">Доставка</a>
                        </li>
                        <li className="footer_top_sub_item">
                            <a href="\">Бонусы</a>
                        </li>
                    </ul>
                </li>
                <li className="footer_top_item">
                    <a href="\">Помощь покупателю</a>
                    <ul className="footer_top_sub_list">
                        <li className="footer_top_sub_item">
                            <a href="\">Вопросы и ответы</a>
                        </li>
                        <li className="footer_top_sub_item">
                            <a href="\">Как сделать заказ на сайте</a>
                        </li>
                        <li className="footer_top_sub_item">
                            <a href="\">Обмен и возврат</a>
                        </li>
                    </ul>
                </li>
                <li className="footer_top_item">
                    <a href="\">Способ  оплаты</a>
                    <ul className="footer_top_sub_list-img">
                        <li className="footer_top_sub_item_img">
                            <a href="\">
                                <img src={payme} alt="" />
                            </a>
                        </li>
                        <li className="footer_top_sub_item_img">
                            <a href="\">
                                <img src={humo} alt="" />
                            </a>
                        </li>
                        <li className="footer_top_sub_item_img">
                            <a href="\">
                                <img src={uzcard} alt="" />
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="footer_top_item">
                    <a href="\">Мы в социальных сетях</a>
                    <ul className="footer_top_sub_list-img">
                        <li className="footer_top_sub_item_img">
                            <a href="\">
                                <img src={linkedIn} alt="" />
                            </a>
                        </li>
                        <li className="footer_top_sub_item_img">
                            <a href="\">
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                        <li className="footer_top_sub_item_img">
                            <a href="\">
                                <img src={tweeter} alt="" />
                            </a>
                        </li>
                        <li className="footer_top_sub_item_img">
                            <a href="\">
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="footer_bottom">
            <ul className="footer_bot_list">
                <li className="footer_bot_item">
                    <a href="\">Единый кол центр</a>
                    <a href="\" className='sub'>+9980 71-54-60-60</a>
                </li>
                <li className="footer_bot_item">
                    <a href="\">Почта для пожеланий и предложений</a>
                    <a href="\" className='sub'>info@udevsmarket.com</a>
                </li>
            </ul>
        </div>

        <h2>UdevsMarket.uz  Все права защищены</h2>
    </div>
  )
}

export default Footer