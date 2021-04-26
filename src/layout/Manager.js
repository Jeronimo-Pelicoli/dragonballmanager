import React from 'react';
import Action from '../components/Action/Action';
import Balls from '../components/Balls/Balls'

import profile from '../mocks/profile.json';
import profileSuccess from '../mocks/profileSuccess.json';
import esferas from '../mocks/esferas.json';
import esferasSuccess from '../mocks/esferasSuccess.json';

const profileBalls = process.env.REACT_APP_PROFILE === 'SUCCESS' ? profileSuccess.profile : profile.profile 
const dragonBalls = process.env.REACT_APP_PROFILE === 'SUCCESS' ? esferasSuccess : esferas

function Manager() {
  return (
    <div>
      {console.log(dragonBalls)}
        <Action balls={profileBalls.balls}/>
        <Balls balls={dragonBalls.balls} profile={profileBalls}/>
    </div>
  );
}

export default Manager;