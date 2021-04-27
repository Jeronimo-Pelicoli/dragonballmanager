import profile from '../../mocks/profile.json';

function profileReducer(state = profile, action) {
    return state.profile
}

export default profileReducer;