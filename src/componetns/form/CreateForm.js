import { Button, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeFilter } from '../../store/actions/categoryAction';
import { createNote } from '../../store/actions/noteAction';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    button: {
        marginTop: 20
    }
})

function CreateForm() {
    
    const classes = useStyles();
    const [value, setValue] = useState({
        title: '',
        details: '',
        category: 'todos'
    })
    
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false)

        if(value.title === '') {
            setTitleError(true)
        }

        if(value.details === '') {
            setDetailsError(true)
        }

        if(value.title && value.details) {
            const action = createNote(value);
            dispatch(action);
            history.push('/');
        }
    }

    const deleteFilter = () => {
        const action = removeFilter();
        dispatch(action)
    }
    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField 
                onChange={(e) => setValue({ ...value, title: e.target.value})}
                className={classes.field}
                label="Note Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                error={titleError}
                value={value.title}
            />

            <TextField 
                onChange={(e) => setValue({ ...value, details: e.target.value})}
                className={classes.field}
                label="Details"
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
                value={value.details}
            />
            
            <FormLabel>Note Category</FormLabel>
            <RadioGroup value={value.category} onChange={(e) => setValue({ ...value, category: e.target.value})}>
                <FormControlLabel value="money" control={<Radio />} label="Money" />
                <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
        

            <Button 
                className={classes.button}
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon/>}
                onClick={deleteFilter}
            >
                Create
            </Button>
        </form>
    );
}

export default CreateForm;