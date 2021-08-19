export const createNote = (note) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        
        const firestore = getFirestore();
        firestore.collection('notes').add({
            ...note,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_NOTE', payload: note})
        }).catch((error) => {
            dispatch({type: 'CREATE_NOTE_ERROR', payload: error})
        })
    }
}

export const deleteNote = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(id).delete()
        .then(() => {
            dispatch({type: 'REMOVE_NOTE', payload: id})
        })
        .catch((error) => {
            dispatch({type: 'REMOVE_NOTE_ERROR', payload: error})
        })
    }
}

export const updateNote = (note) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).set({
            ...note
        }).then(() => {
            dispatch({type: 'UPDATE_NOTE', payload: note})
        }).catch((error) => {
            dispatch({type: 'UPDATE_NOTE_ERROR', payload: error})
        })
    }
}

