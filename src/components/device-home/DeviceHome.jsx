import './deviceHome.scss'
import cooker from '../../Assets/image/device-home/aspirador.png'
import cleaner from '../../Assets/image/device-home/vocume-cleaner.png'
import clotheCleaner from '../../Assets/image/device-home/clothe-wather.png'
import fridge from '../../Assets/image/device-home/fridge.png'
import airConditioner from '../../Assets/image/device-home/aircondotioner.png'

const DeviceHome = () => {
  return (
    <div className='category'>
        <ul className="category_list">
            <li className="category_item">
                <img src={cooker} alt="" />
                <span className='category_name'>Встраиваемая техника</span>
            </li>
            <li className="category_item">
                <img src={cleaner} alt="" />
                <span className='category_name'>Пылесосы</span>
            </li>
            <li className="category_item">
                <img src={clotheCleaner} alt="" />
                <span className='category_name'>Стиральные машины</span>
            </li>
            <li className="category_item">
                <img src={fridge} alt="" />
                <span className='category_name'>Холодильники</span>
            </li>
            <li className="category_item">
                <img src={airConditioner} alt="" />
                <span className='category_name'>Кондиционеры</span>
            </li>
        </ul>
    </div>
  )
}

export default DeviceHome