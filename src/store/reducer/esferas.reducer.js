import { balls } from '../../mocks/esferas.json';

function Esferas(state = balls, action) {
    switch(action.type) {
        case 'ADD_BALL':
            const newState = state.map(ball => {
                if(ball.id === action.payload[0].id) {
                    ball.owner = action.payload[1].id
                }
                return ball
            })
            return newState;
        case 'RESET_BALL':
            const ballReset = state.map(ball => {
                ball.owner = null;
                return ball;
            })
            return ballReset;
        default:
            return state  
    }
}

export default Esferas;