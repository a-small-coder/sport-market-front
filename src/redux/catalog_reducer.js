const SET_PRODUCT_CATEGORIES = "SET_PRODUCT_CATEGORIES"
const SET_PRODUCTS = "SET_PRODUCTS"
const SET_PAGGINATION = "SET_PAGGINATION"

let initialState = {
    paggination: {
        page: 1,
        page_size: 20,
        page_count: 10,
    },
    categories: [],
    products: [],
    
}

let catalog_reducer = (state = initialState, action) => {
    let stateCopy = { ...state }
    switch (action.type) {

        case SET_PRODUCT_CATEGORIES:
            stateCopy.categories = action.categories.map(c => {
                let category = {
                    categoryTitle: c.name,
                    categoryLink: c.slug
                }
                if (c.subcategories != null && c.subcategories.length > 0) {
                    category.subcategories = c.subcategories.map(sc => (
                        { title: sc.name, link: sc.slug }
                    ))
                }
                return category
            })
            return stateCopy;

        case SET_PRODUCTS:
            stateCopy.products = [...action.products]
            return stateCopy
        
        case SET_PAGGINATION:
            stateCopy.paggination = {...action.paggination}
            return stateCopy

        default:
            return state;
    }
}

export const setProductCategoriesAC = (categories) => ({ type: SET_PRODUCT_CATEGORIES, categories })
export const setProductsAC = (products) => ({ type: SET_PRODUCTS, products })
export const setPagginationAC = (pagginationData) => ({ type: SET_PAGGINATION, paggination: pagginationData })

export default catalog_reducer