import React, { useEffect } from 'react';
import './App.css'
import Bottombanner from './components/bottomBanner/Bottombanner';
import Brends from './components/brends/Brends';
import Category from './components/category/Category';
import CostumerChoice from './components/costumerChoice/CostumerChoice';
import DeviceHome from './components/device-home/DeviceHome';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Products from './components/products/Products';
// import { SearchIcon } from './Assets/icons/icons';
import TopBar from './components/topbar/TopBar';
// ! import request instead of axios
import { request } from './utils/request';

const App = () => {
  const getUsers = () => {
    request.get('/users')
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    <div className='app'>
      <TopBar />
      <Header />
      <p className='category_title' style={{marginLeft: '110px'}}>Популярные категории</p>
      <Category />
      <p className='popular_sales' style={{marginLeft: '110px'}}>Хиты продаж</p>
      <Products />
      <p className='device_home' style={{marginLeft: '110px'}}>Техника для дома</p>
      <DeviceHome />
      <p className='costumer_choice' style={{marginLeft: '110px'}}>Выбор покупателей</p>
      <CostumerChoice />
      <p className='popular_brends' style={{marginLeft: '110px'}}>Популярные бренды</p>
      <Brends />
      <Bottombanner />
      <Footer />
      {/* <p>TopBar</p>
      <p>Header</p>
      <p>NavBar</p>
      <p>Banner</p>
      <p>ProductList</p>
      <SearchIcon/> */}
    </div>
  );
}
 
export default App;