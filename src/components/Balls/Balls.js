import React from 'react';
import { useSelector } from 'react-redux';
import './Balls.css';


function Balls() {
    const esferas = useSelector(function(state) {
        return state.Esferas
    })
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
                            <h3>Não encontrada</h3>
                            <button>encontrei</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Balls;