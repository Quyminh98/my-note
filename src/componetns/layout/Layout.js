import { Hidden, makeStyles } from '@material-ui/core';
import React from 'react';
import Appbar from './Appbar';
import SideDrawer from './SideDrawer';


const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%', 
            minHeight: 600,
            padding: theme.spacing(3)
        },
        root: {
            display: 'flex'
        },
        toolbar: {
            [theme.breakpoints.down('md')]: {
                marginTop: theme.spacing(14) 
            },
            [theme.breakpoints.up('md')]: {
                marginTop: theme.spacing(8) 
            },
        }
    }
})

function Layout({children}) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>

            <Appbar />

            <Hidden smDown>
                <SideDrawer />
            </Hidden>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
}

export default Layout;