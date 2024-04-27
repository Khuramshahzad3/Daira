import { useEffect, useState } from 'react';
import './App.css'
import Axios from 'axios'

function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await Axios.get('http://127.0.0.1:5000/read');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container bg-slate-800">
      <h3 className='text-green-500 font-semibold text-center'>TailwindCSS</h3>
      <div>
        <h4 className="text-white">Users:</h4>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
