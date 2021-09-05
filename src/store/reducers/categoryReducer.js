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
        case 'REMOVE_FILTER':
            console.log('remove filter')
            return {
                ...state,
                filterList: []
            }
        default: 
            return state;
    }
}

export default categoryReducer;