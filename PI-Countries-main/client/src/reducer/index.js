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
        case 'FILTER_CONTINENT':
            const allCountries = state.allCountries;
            const continentFilter = action.payload === 'All' ? allCountries : allCountries.filter( c => c.continente === action.payload)

            return {
                ...state,
                allCountries: continentFilter
            }
        case 'SORT':
        var sorted 
            if(action.payload === 'nada'){
                sorted = state.allCountries
            }
            if (action.payload === 'asc'){
                sorted = state.allCountries.sort((a,b) => {
                    if (a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                })
            }
            if(action.payload === 'desc'){
                sorted = state.allCountries.sort((a,b) => {
                    if (a.name > b.name) return -1;
                    if(a.name < b.name)return 1;
                    return 0;
                })
            }
            if(action.payload === 'Mayor'){
                sorted = state.allCountries.sort((a,b) => {
                    return b.poblacion - a.poblacion
                })
            }
            if(action.payload === 'Menor'){
                sorted = state.allCountries.sort((a,b) => {
                    return a.poblacion - b.poblacion
                })
            }
            return {
                ...state,
                allCountries: sorted
            }
            
        case 'CREATE_ACTIVITY':
            return{
                ...state,
            }
            case 'COUNTRY_DETAIL':
            return{
                ...state,
                detail: action.payload
            }
        case 'FILTER_ACTIVITY':
            const allCoun = state.allCountries;
            const activityFilter = action.payload === 'All' ? allCoun : 
            allCoun.filter( c => c.activities && c.activities.filter((a) => 
            a.name === action.payload).length)
            return{
                ...state,
                allCountries: activityFilter
            }
        default:
            return state
    }
}

export default rootReducer;