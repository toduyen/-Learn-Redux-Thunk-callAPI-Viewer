import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {loadPosts} from '../src/redux/actions/postAction';
import {useDispatch , useSelector} from 'react-redux';

function App() {
  const data = useSelector(state => state.posts.data);
  const requesting = useSelector(state => state.posts.requesting);
   const dispatch = useDispatch();
   useEffect(() => {
    dispatch(loadPosts());
   }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          requesting ? 
          <img src={logo} className="App-logo" alt="logo" />
          :
          (data && data.length > 0) ? <div>
            {
              
              data.map((value) => 
                <ul>
                <li key={value.id}>
                  {value.title}
                </li>
                </ul>
              )
            
            }
          </div> :
           <div>Data isEmpty</div> 
        }
      </header>
    </div>
  );
}

export default App;
