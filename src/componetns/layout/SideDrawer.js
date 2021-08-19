import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const drawWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        drawer: {
            width: drawWidth
        },
        drawerPaper: {
            width: drawWidth
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        }
        
    }
})

function SideDrawer() {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ];

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper: classes.drawerPaper}}
        >
            <div>
                <Typography variant="h5" className={classes.title}>
                    My Notes
                </Typography>
            </div>
            
            <List>
                {menuItems.map(item => (
                    <ListItem
                        button
                        key={item.text}
                        className={location.pathname === item.path ? classes.active : null}
                        onClick={() => history.push(item.path)}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        
        </Drawer>
    );
}

export default SideDrawer;