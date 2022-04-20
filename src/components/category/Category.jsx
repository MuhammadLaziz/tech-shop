import './category.scss'
import Phone from '../../Assets/image/category/phone.png'
import Desktop from '../../Assets/image/category/desktop.png'
import Nout from '../../Assets/image/category/nout.png'
import Watch from '../../Assets/image/category/watch.png'

const Category = () => {
  return (
    <div className='category'>
        <ul className="category_list">
            <li className="category_item">
                <img src={Phone} alt="" />
                <span className='category_name'>Смартфоны</span>
            </li>
            <li className="category_item">
                <img src={Desktop} alt="" />
                <span className='category_name'>Мониторы</span>
            </li>
            <li className="category_item">
                <img src={Nout} alt="" />
                <span className='category_name'>Компьютеры</span>
            </li>
            <li className="category_item">
                <img src={Watch} alt="" />
                <span className='category_name'>Аксессуары</span>
            </li>
        </ul>
    </div>
  )
}

export default Category