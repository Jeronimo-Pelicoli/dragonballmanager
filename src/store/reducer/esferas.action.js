export function AddOwnerInBall(esfera, profile) {
    return {
        type : "ADD_BALL",
        payload : [ esfera, profile ]
    }
}

export function ResetBall() {
    return {
        type : "RESET_BALL",
    }
}