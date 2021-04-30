import { profile } from '../../mocks/profile.json';

function profileReducer(state = profile, action) {
    switch(action.type) {
        case 'ADD_PROFILE':
            state.balls.push(action.payload.id)
            state.balls.sort()
            return state
        case 'RESET_PROFILE_BALL':
            state.balls = [];
            state.desejos.push(action.payload)
            return state;
        default:
            return state  
    }
}

export default profileReducer;