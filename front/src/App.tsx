import React, {useEffect, useState, useMemo, useCallback, useRef, useContext, useReducer, useImperativeHandle } from 'react';
import Axios from 'axios';
import Form, {FormRef} from './Form';



function App() {
  const [user, setUser] = useState<[IUser]>();

  async function loadData() {
    const response = await Axios.get<[IUser]>('https://api.github.com/users/alektobias')
    setUser(response.data);
  } 

  const names = useMemo(()=> user?.map(user => user.name).join(', '),[user])
  const greeting = useCallback( (name: string) => alert(`Helo ${name}`), []);


  const inputRef = useRef<HTMLInputElement>(null);
  const FormRef = useRef<FormRef>(null);

  function focusOnInput(){
    inputRef.current?.focus();
  }

  function handleSubmit() {
    FormRef.current?.submit();
  }

  useEffect(() => {loadData()},[])
  return (
    <Form ref={FormRef}/>
  );
}

export default App;

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}