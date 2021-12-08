const SET_SHOW_SIDE_BAR = "SET_SIDE_BAR"

const initialState = {
    showSideBar: true
}

let sidebar_reducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_SHOW_SIDE_BAR:
            stateCopy.showSideBar = action.isShowed
            return stateCopy;
    
        default:
            return state;
    }
}

export const setShowSideBarAC = (isShowed) => ({type: SET_SHOW_SIDE_BAR, isShowed})

export default sidebar_reducer