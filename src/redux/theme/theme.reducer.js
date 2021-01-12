const INITIAL_STATE = {
    darkTheme: false
}

const themeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SET_THEME' :
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        default:
            return state
    }
}

export default themeReducer