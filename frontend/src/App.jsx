import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Axios from 'axios'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  const [users, setUsers] = useState([]);

  // const getAllUsers = async () => {
  //   try {
  //     const response = await Axios.get('http://127.0.0.1:5000/read');
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // }

  // useEffect(() => {
  //   getAllUsers();
  // }, []);

  return (
    <div className="">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
