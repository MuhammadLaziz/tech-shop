import './brends.scss'
import nokia from '../../Assets/image/brends/nokia.png'
import apple from '../../Assets/image/brends/apple.png'
import sumsung from '../../Assets/image/brends/sumsung.png'
import huawei from '../../Assets/image/brends/huawei.png'
import lg from '../../Assets/image/brends/lg.png'
import mi from '../../Assets/image/brends/mi.png'

const Brends = () => {
  return (
    <div className='brends'>
        <div className="brends_top">
            <ul className="top_list">
                <li className="top_item">
                    <p>Телефоны</p>
                </li>
                <li className="top_item">
                    <p>Аксессуары</p>
                </li>
                <li className="top_item">
                    <p>Premium</p>
                </li>
                <li className="top_item">
                    <p>Спорт</p>
                </li>
                <li className="top_item">
                    <p>Игрушки</p>
                </li>
                <li className="top_item">
                    <p>Красота</p>
                </li>
                <li className="top_item">
                    <p>Книги</p>
                </li>
                <li className="top_item">
                    <p>Обувь</p>
                </li>
            </ul>
        </div>
        <div className="brends_bottom">
            <ul className="bottom_list">
                <li className="bottom_item">
                    <img src={nokia} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={apple} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={sumsung} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={sumsung} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={sumsung} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={sumsung} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={huawei} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={lg} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={mi} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={mi} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={mi} alt="" />
                </li>
                <li className="bottom_item">
                    <img src={mi} alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Brends