export function AddBallInProfile(esfera) {
    return {
        type : "ADD_PROFILE",
        payload : esfera
    }
}

export function ResetProfileBall(desejo) {
    return {
        type : "RESET_PROFILE_BALL",
        payload : desejo
    }
}