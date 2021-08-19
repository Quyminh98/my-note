import React from 'react';
import NoteCard from './NoteCard';
import Masonry from 'react-masonry-css';

function NoteList({notes, handleDelete}) {
    
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }
    
    if(notes) {
        return (
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes.map(note => {
                    return (
                        <div key={note.title} >
                            <NoteCard note={note} handleDelete={handleDelete}/>
                        </div>
                    )
                })}
            </Masonry>
        );
    } else {
        return <div>Loadingggg...</div>
    }
}

export default NoteList;