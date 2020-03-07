import React, {useEffect, useState, useMemo} from 'react';
import Axios from 'axios';



function App() {
  const [user, setUser] = useState<IUser>();

  async function loadData() {
    const response = await Axios.get<IUser>('https://api.github.com/users/alektobias')
    setUser(response.data);
  } 

  useEffect(() => {loadData()},[])
  return (
    <div>
      {user?.name}
    </div>
  );
}

export default App;

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}