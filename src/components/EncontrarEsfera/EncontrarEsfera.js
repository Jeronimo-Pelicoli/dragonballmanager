import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddOwnerInBall } from '../../store/reducer/esferas.action';
import { AddBallInProfile } from '../../store/reducer/profile.action';
import './EncontrarEsfera.css';

function EncontrarEsfera({ toggle, ball, profile }) {

    let inputKey;
    const [ errorKey, setErrorKey] = useState("")
    const [ success,setSuccess] = useState(false);

    const dispatch = useDispatch();

    function validateBall(inputKey, ballKey) {
        if(inputKey === ballKey.keycode) {
            setSuccess(true);
            dispatch(AddOwnerInBall(ballKey, profile))
            dispatch(AddBallInProfile(ballKey))
        } else {
            setErrorKey("Senha incorreta")
        }
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close" onClick={toggle} >x</button>
                <h1>Esfera de {ball.name}</h1>
                {success ? (
                    <div>
                        <h2>encontrata com sucesso</h2>
                    </div>
                ) : (
                    <div className="modal-text">
                        <p>Insira a senha</p>
                        <input type="text" onChange={(e) => inputKey = Number(e.target.value)}/>
                        <div className="error">{errorKey}</div> 
                        <button onClick={() => {validateBall(inputKey, ball)}}>validar esfera</button>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default EncontrarEsfera;