import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import EditPage from './components/Edit/EditPage';
import Header from './components/header/Header';

function App() {
  const pending = useSelector((state) => state.user.pending)
  const error = useSelector((state) => state.user.error)
  const [isEdit, setEdit] = useState(false)

  return (
    <div className="App">
      {isEdit ? (<EditPage setEdit={setEdit} />) : (<Header setEdit={setEdit} />)}
      {pending && <p className='loading'>Loading...</p>}
      {!isEdit && error && (
        <p className='error'>Have Error Data</p>
      )}


    </div>
  );
}

export default App;
