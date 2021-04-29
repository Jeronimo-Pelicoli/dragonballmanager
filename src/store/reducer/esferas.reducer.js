import { balls } from '../../mocks/esferas.json';

function Esferas(state = balls, action) {
    switch(action.type) {
        case 'ADD':
            const newState = state.map(ball => {
                if(ball.id === action.payload[0].id) {
                    ball.owner = action.payload[1].id
                }
                return ball
            })
            return newState
        default:
            return state  
    }
}

export default Esferas;