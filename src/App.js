import React, { useEffect } from 'react';
import './App.css'
import Category from './components/category/Category';
import DeviceHome from './components/device-home/DeviceHome';
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
      <p className='category_title'>Популярные категории</p>
      <Category />
      <p className='popular_sales'>Хиты продаж</p>
      <Products />
      <p className='device_home'>Выбор покупателей</p>
      <DeviceHome />
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