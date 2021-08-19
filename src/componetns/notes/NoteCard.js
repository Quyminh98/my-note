import React from 'react';
import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';
import { CardActions } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyle = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if(note.category === 'work') {
                return yellow[700];
            }
            if(note.category === 'money') {
                return green[500];
            }
            if(note.category === 'todos') {
                return pink[500];
            }
            return blue[500];
        }
    },
    action: {
        justifyContent: 'center'
    }
})

function NoteCard({note, handleDelete}) {
    const classes = useStyle(note);
    const history = useHistory();
    const onDelete = (id) => {
        handleDelete(id)
    }

    const onEdit = (id) => {
        history.push(`/edit/${id}`)
    }
    const filterList = useSelector(state => state.category.filterList)
    return (
        <div >
            <Card elevation={1} className={classes.test}>
                <CardHeader 
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon /> 
                        </IconButton>
                     
                    }
                    
                    title={note.title}
                    subheader={moment(note.createdAt.toDate()).calendar()}

                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
                    {filterList.length === 0 &&
                        <CardActions className={classes.action}>
                            <IconButton aria-label="edit" onClick={() => onEdit(note.id)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => onDelete(note.id)}>
                            <DeleteOutlined />
                            </IconButton>
                        </CardActions>
                    }
            </Card>
        </div>
    );
}

export default NoteCard;