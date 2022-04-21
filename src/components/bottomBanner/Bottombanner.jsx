import './bottomBanner.scss'
import logo from '../../Assets/image/topbar/logo.png'
import appStore from '../../Assets/image/banner/app-store.png'
import playMarket from '../../Assets/image/banner/google-play.png'
import qrCod from '../../Assets/image/banner/qr-code.png'

const Bottombanner = () => {
  return (
    <div className='bottom_banner'>
        <div className="main_wrapper">
        <div className="bottom_ba-left">
            <div className="bottom_ban_left_box">
                <img src={logo} alt="" />
                <div className='div'>|</div>
                <p>mobile application</p>
            </div>
            <h1>Заказывайте через мобильное приложение</h1>
            <div className="bottom-ban_left_link">
                <a href="\">
                    <img src={playMarket} alt="" />
                </a>
                <a href="\">
                    <img src={appStore} alt="" />
                </a>
            </div>
        </div>
        <img src={qrCod} alt="" />
        <div className="bottom_ba-right">
            <p>Отсканируйте QR-код и установите приложение</p>
        </div>
        </div>
    </div>
  )
}

export default Bottombanner