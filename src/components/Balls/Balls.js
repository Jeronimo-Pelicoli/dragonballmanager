import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import EncontrarEsfera from '../EncontrarEsfera/EncontrarEsfera'
import estrelas from '../../asset/img/imageBall';
import './Balls.css';


function Balls() {
    const esferas = useSelector(function(state) {
        return state.Esferas
    })
    const profile = useSelector(function(state) {
        return state.Profile
    })

    const [ isOpen, setIsOpen] = useState(false);
    const [ currentBall, setCurrentBall] = useState({});
    const [ list, setList] = useState(esferas);
    function toggle() {
        setIsOpen(!isOpen);
    }

    function filterByMe() {
        return esferas.filter((ball) => ball.owner === profile.id);
    }
    function filterNotMe() {
        return esferas.filter((ball) => ball.owner !== profile.id);
    }

    function filterBall(value) {
        console.log(value);
        switch(value) {
            case 'me':
                setList(filterByMe())
                break
            case 'all':
                setList(esferas)
                break
            case 'notme':
                setList(filterNotMe())
                break
            default:
                setList(esferas)
        }
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
                    <select onChange={(e) => {filterBall(e.target.value)}}>
                        <option value='all'>todas as esferas</option>
                        <option value='me'>Minhas esferas</option>
                        <option value='notme'>esferas perdidas</option>
                    </select>
                </label>
            </div>
            <div className='balls'>
                <ul>
                    {list.map((ball, i) => (
                        <li key={ball.id}>
                            <img src={estrelas[i]} alt={ball.name} />
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
            { isOpen && <EncontrarEsfera toggle={toggle} ball={currentBall} profile={profile}/> }

        </div>
    );
}

export default Balls;