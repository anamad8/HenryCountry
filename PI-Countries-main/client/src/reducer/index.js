const initialState = {    
    allCountries : [],
    detail: {}
}

function rootReducer(state = initialState, action){
    switch(action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                allCountries: action.payload
            }
        case 'GET_BY_NAME':
            return {
                ...state,
                allCountries: action.payload
            }
        // case 'FILTER_CONTINENT':
        //     const allCountries = state.allCountries;
        //     const continentFilter = action.payload === 'All' ? allCountries : allCountries.filter( c => c.continent === action.payload)
        //     return {
        //         ...state,
        //         countries: continentFilter
        //     }
        // case 'SORT':
        // var sorted 
        //     if(action.payload === 'nothing'){
        //         sorted = state.countries
        //     }
        //     if (action.payload === 'asc'){
        //         sorted = state.countries.sort((a,b) => {
        //             if (a.name > b.name) return 1;
        //             if(a.name < b.name) return -1;
        //             return 0;
        //         })
        //     }
        //     if(action.payload === 'desc'){
        //         sorted = state.countries.sort((a,b) => {
        //             if (a.name > b.name) return -1;
        //             if(a.name < b.name)return 1;
        //             return 0;
        //         })
        //     }
        //     if(action.payload === 'Higher'){
        //         sorted = state.countries.sort((a,b) => {
        //            return b.poblation - a.poblation
        //         })
        //     }
        //     if(action.payload === 'Lower'){
        //         sorted = state.countries.sort((a,b) => {
        //            return a.poblation - b.poblation
        //         })
        //     }
        //     return {
        //         ...state,
        //         countries: sorted
        //     }
        // case 'CREATE_ACTIVITY':
        //     return{
        //         ...state,
        //     }
            case 'COUNTRY_DETAIL':
            return{
                ...state,
                detail: action.payload
            }
        // case 'FILTER_ACTIVITY':
        //     const allCoun = state.allCountries;
        //     const activityFilter = action.payload === 'All' ? allCoun : allCoun.filter( c => c.activities && c.activities.filter((a) => a.name === action.payload).length )
        //     return{
        //         ...state,
        //         countries: activityFilter
        //     }
        default:
            return state
    }
}

export default rootReducer;