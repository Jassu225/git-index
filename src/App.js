import React from 'react';
import { useSelector } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Search/Search';
import UserList from './components/UsersList/UsersList';
import UserInfo from './components/UserInfo/UserInfo';
import { getUserInfo, getShowModal } from './store/selectors';

function App() {
  // const user = useSelector(state => getUserInfo(state));
  const showModal = useSelector(state => getShowModal(state));
  return (
    <div className="App">
      <SearchBar />
      <UserList />
      { showModal && <UserInfo />}
    </div>
  );
}

export default App;
