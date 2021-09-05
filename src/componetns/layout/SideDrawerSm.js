import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
    return {
        active: {
            background: '#f4f4f4'
        },
        list: {
            display: 'flex'
        }, 
        
    }
})

function SideDrawerSm() {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const menuItems = [
        {
            text: 'Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ];

    return (  
            <List className={classes.list}>
                {menuItems.map(item => (
                    <ListItem

                        button
                        key={item.text}
                        className={location.pathname === item.path ? classes.active : null}
                        onClick={() => history.push(item.path)}
                    >
                        <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                        <ListItemText className={classes.text} primary={item.text} />
                    </ListItem>
                ))}
            </List>
    );
}

export default SideDrawerSm;