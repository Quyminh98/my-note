export const filterNote = (filter) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').where("category", "==" , filter)
        .get()
        .then((querySnapshot) => {
            const filterList = querySnapshot.docs.map(doc => doc.data())
            dispatch({type: 'FILTER_NOTE', payload: filterList})
        }).catch((error) => {
            dispatch({type: 'FILTER_NOTE_ERROR', payload: error})
        })
    }
}

export const removeFilter = () => {
    return {
        type: 'REMOVE_FILTER',
    }
}

