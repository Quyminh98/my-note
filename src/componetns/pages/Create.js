import {  Container, Typography } from '@material-ui/core';
import React from 'react';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import CreateForm from '../form/CreateForm';
import {useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditForm from '../form/EditForm';

function Create() {
    const noteId = useParams().id;

    const noteList = useSelector(state => {
        return state.firestore.ordered.notes
    })

    if (noteList) {
        const editNote = noteId && noteList.find(note => note.id === noteId)
        return (
            <Container>
                <Typography 
                    variant="h6"
                    color="textSecondary"
                    component="h2"
                    gutterBottom
                >
                   {!noteId ? "Create a new note": "Edit note"} 
                </Typography>
                {!noteId ? <CreateForm /> : <EditForm editNote={editNote} />}
                
            </Container>
        );
    
    } else {
        return <div>...Loading</div>
    }
}

export default compose(
    firestoreConnect([
        {collection: 'notes'}
    ])
) (Create);