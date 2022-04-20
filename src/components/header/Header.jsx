import './header.scss'
import first from '../../Assets/image/header/1.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="main_part">
            <img src={first} alt="" />
        </div>
        <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>
  )
}

export default Header