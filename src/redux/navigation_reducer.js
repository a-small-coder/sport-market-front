const SET_CATEGORIES = "ADD_CATEGORIES"

let initialState = {
    main_categories: []
}

let navigation_reducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_CATEGORIES:
            stateCopy.main_categories = action.categories
            return stateCopy;
    
        default:
            return state;
    }
}

export const setCategoriesAC = (categories) => ({type: SET_CATEGORIES, categories})

export default navigation_reducer