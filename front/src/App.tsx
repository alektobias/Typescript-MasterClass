import React, {useEffect, useState, useMemo, useCallback} from 'react';
import Axios from 'axios';



function App() {
  const [user, setUser] = useState<[IUser]>();

  async function loadData() {
    const response = await Axios.get<[IUser]>('https://api.github.com/users/alektobias')
    setUser(response.data);
  } 

  const names = useMemo(()=> user?.map(user => user.name).join(', '),[user])
  const greeting = useCallback( (name: string) => alert(`Helo ${name}`), []);

  useEffect(() => {loadData()},[])
  return (
    <div>
      {names}
    </div>
  );
}

export default App;

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}