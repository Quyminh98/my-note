import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterNote } from '../../store/actions/categoryAction';

const useStyles = makeStyles((theme) => {
    return {
        formControl: {
            marginRight: theme.spacing(2),
            width: 150,
            
        },
        label: {
            lineHeight: '1.2px'
        },
        select: {
            height: 38
        }
    }
})

function FilterForm() {
    const classes = useStyles();
    const dispatch= useDispatch();
    const [category, setCategory] = useState('');
    
    const handleChange = (e) => {
        setCategory(e.target.value);
        const action = filterNote(e.target.value);
        dispatch(action)
    }

    return (
        <FormControl variant="outlined" className={classes.formControl} color='secondary'>
            <InputLabel className={classes.label} id="demo-simple-select-outlined-label">Category</InputLabel>
            <Select
                className={classes.select}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                onChange={handleChange}
                label="Category"
            >
            <MenuItem value="all">
                <em>All</em>
            </MenuItem>
            <MenuItem value='money'>Money</MenuItem>
            <MenuItem value='todos'>Todos</MenuItem>
            <MenuItem value='reminders'>Reminders</MenuItem>
            <MenuItem value='work'>Work</MenuItem>
            </Select>
        </FormControl>
    );
}

export default FilterForm;