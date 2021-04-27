import React from 'react';
import { useSelector } from 'react-redux';
import './Action.css'


function Action() {

  const profile = useSelector(function(state) {
    return state.Profile
})

  return (
    <div className='shenlong'>
        <h1>Invocar Shenlong</h1>
        <button>Invocar</button>
        {console.log(profile)}
    </div>
  );
}

export default Action;