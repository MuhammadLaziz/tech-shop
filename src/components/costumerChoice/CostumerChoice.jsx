import './costumerChoice.scss'
import first from '../../Assets/image/products/1.png'
import trash from '../../Assets/image/products/trash.png'
import sycle from '../../Assets/image/topbar/sync_alt.png'
import heart from '../../Assets/image/topbar/heart.png'
import star from '../../Assets/image/products/star.png'

const Products = () => {
  return (
    <div className='products'>
        <ul className="product_list">
            <li className="product_item">
                <img src={first} alt="" />
                <p className='product-name'>Samsung Galaxy A41 Red 64 GB</p>
                <p className="price">3 144 000 сум</p>
                <p className="debt_price">От 385 000 сум/12 мес</p>
                <div className="stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <div className="btn_control">
                    <button>
                        <img src={trash} alt="" />
                        В корзину
                    </button>
                    <div className="mark">
                        <img src={sycle} alt="" />
                        <img src={heart} alt="" />
                    </div>
                </div>
            </li>
            <li className="product_item">
                <img src={first} alt="" />
                <p className='product-name'>Samsung Galaxy A41 Red 64 GB</p>
                <p className="price">3 144 000 сум</p>
                <p className="debt_price">От 385 000 сум/12 мес</p>
                <div className="stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <div className="btn_control">
                    <button>
                        <img src={trash} alt="" />
                        В корзину
                    </button>
                    <div className="mark">
                        <img src={sycle} alt="" />
                        <img src={heart} alt="" />
                    </div>
                </div>
            </li>
            <li className="product_item">
                <img src={first} alt="" />
                <p className='product-name'>Samsung Galaxy A41 Red 64 GB</p>
                <p className="price">3 144 000 сум</p>
                <p className="debt_price">От 385 000 сум/12 мес</p>
                <div className="stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <div className="btn_control">
                    <button className='one'>
                        {/* <img src={trash} alt="" /> */}
                        Заказать
                    </button>
                    <div className="mark">
                        <img src={sycle} alt="" />
                        <img src={heart} alt="" />
                    </div>
                </div>
            </li>
            <li className="product_item">
                <img src={first} alt="" />
                <p className='product-name'>Samsung Galaxy A41 Red 64 GB</p>
                <p className="price">3 144 000 сум</p>
                <p className="debt_price">От 385 000 сум/12 мес</p>
                <div className="stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <div className="btn_control">
                    <button className='two'>
                        {/* <img src={trash} alt="" /> */}
                        Заказать
                    </button>
                    <div className="mark">
                        <img src={sycle} alt="" />
                        <img src={heart} alt="" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Products