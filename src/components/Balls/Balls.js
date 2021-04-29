import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import EncontrarEsfera from '../EncontrarEsfera/EncontrarEsfera'
import './Balls.css';


function Balls() {
    const esferas = useSelector(function(state) {
        return state.Esferas
    })
    const profile = useSelector(function(state) {
        return state.Profile
    })

    const [ isOpen, setIsOpen] = useState(false);
    const [ currentBall, setCurrentBall] = useState(null);

    function toggle() {
        setIsOpen(!isOpen);
    }

    function validatedBall(ball) {
        setCurrentBall(ball);
        toggle()
    }

    return (
        <div className='containerEsferas'>
            <div className='filtroEsferas'>
                <h1>Esferas</h1>
                <label>Filtrar
                    <select >
                        <option value='all'>todas as esferas</option>
                        <option value='me'>Minhas esferas</option>
                        <option value='notme'>Não tenho</option>
                    </select>
                </label>
            </div>
            <div className='balls'>
                <ul>
                    {esferas.map(ball => (
                        <li key={ball.id}>
                            <img src={ball.image} alt={ball.name} />
                            <p>{ball.name}</p>
                            {ball.owner !== profile.id ? (
                                <>
                                <h3>Não encontrada</h3>
                                <button onClick={() => {validatedBall(ball)}} >encontrei</button>
                                </>
                            ) : (
                                <h3>encontrata</h3>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            { isOpen && <EncontrarEsfera toggle={toggle} ball={currentBall} /> }

        </div>
    );
}

export default Balls;