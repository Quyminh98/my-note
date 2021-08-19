const initState = {
    filterList: []
}
const categoryReducer = (state = initState, action) => {
    switch(action.type) {
        case 'FILTER_NOTE':
            return {
                ...state,
                filterList: action.payload
            }

        default: 
            return state;
    }
}

export default categoryReducer;