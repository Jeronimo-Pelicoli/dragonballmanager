export function AddEsferaInProfile(esfera, profile) {
    return {
        type : 'ADD_ESFERA_IN_PROFILE',
        payload : [ esfera, profile]
    }
}