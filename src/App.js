import React, { useEffect } from 'react';
import './App.css'
import { SearchIcon } from './Assets/icons/icons';
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
    <div>
      <p>TopBar</p>
      <p>Header</p>
      <p>NavBar</p>
      <p>Banner</p>
      <p>ProductList</p>
      <SearchIcon/>
    </div>
  );
}
 
export default App;