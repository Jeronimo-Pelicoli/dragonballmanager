import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ResetBall } from '../../store/reducer/esferas.action';
import { ResetProfileBall } from '../../store/reducer/profile.action';
import shenlong from '../../asset/img/shenlong.webp';
import './InvocaShenlong.css';

function InvocaShenlong({ profile, toggle }) {

    const [ success, setSuccess] = useState(false);

    let desejo;

    const dispatch = useDispatch()

    function pedidoShenlong(desejo) {
        dispatch(ResetBall())
        dispatch(ResetProfileBall(desejo))
        setSuccess(true);
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="button-shenlong" onClick={toggle}>x</button>

                <h3>Shenlong</h3>
                {success ? (
                    <h4>realizou seu desejo</h4>
                ) : (
                    <div className="modal-text">
                        {profile.balls.length === 7 ? (
                            <>
                            <img alt="shenlong" src={shenlong}/>
                            <input type="text" onChange={(e) => desejo = e.target.value}/>
                            <button className="button-shenlong" onClick={()=> pedidoShenlong(desejo)}>fazer desejo</button>
                            </>
                        ) : (
                            <div className="error">faio</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default InvocaShenlong;