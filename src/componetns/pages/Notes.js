import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteNote } from '../../store/actions/noteAction';
import NoteList from '../notes/NoteList';

function Notes() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        },300)
    },[])
    const notes = useSelector(state => state.firestore.ordered.notes);

    const filterList = useSelector(state => 
        state.category.filterList)

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        const action = deleteNote(id);
        dispatch(action);
    }
    
    return (
        <Container>
            { loading 
                ? <div>Loadingggg.....</div> 
                : <NoteList notes={filterList.length === 0 ? notes : filterList} handleDelete={handleDelete}/>
            }
    
        </Container>
    );
}

export default compose(
    firestoreConnect([
        {collection: 'notes', orderBy: ["createdAt","desc"]}
    ])
) (Notes);
