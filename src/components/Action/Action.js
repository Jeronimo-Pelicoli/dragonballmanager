import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import InvocaShenlong from '../InvocaShenlong/InvocaShenlong';
import './Action.css';


function Action() {

  const profile = useSelector(function(state) {
    return state.Profile;
  })

  const [ isOpen, setIsOpen ] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='shenlong'>
        <h1>Invocar Shenlong</h1>
        <button onClick={() => {toggle()}}>Invocar</button>
        {isOpen && <InvocaShenlong toggle={toggle} profile={profile} />}
    </div>
  );
}

export default Action;