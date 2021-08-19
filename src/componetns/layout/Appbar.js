import React from 'react';
import { AppBar, Hidden, Typography } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {format} from 'date-fns';
import { Avatar } from '@material-ui/core';
import FilterForm from '../form/FilterForm';
import { useLocation } from 'react-router-dom';
import SideDrawerSm from './SideDrawerSm';

const drawWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        appbar: {
            [theme.breakpoints.up('md')]: {
                width: `calc(100% - ${drawWidth}px)`  
            },
        },
        tool: {
            flexDirection: 'column'
        },
        nav: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            marginTop: theme.spacing(1.5)
        },
        date: {
            flex: 1,
            alignItems: 'center'
        },
        avatar: {
            marginLeft: theme.spacing(2)
        },
        redirect: {
            width: '100%'
        },
        name: {
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.9rem'
            }
        }
}})

function Appbar() {
    const classes = useStyles();
    const location = useLocation();
    
    return (
        <AppBar
            className={classes.appbar}
            elevation={1}
        >
            <Toolbar className={classes.tool}>
                <div className={classes.nav}>
                    <div className={classes.date}>
                        {location.pathname === '/' 
                        ? <FilterForm /> 
                        :  <Hidden xsDown>
                            <Typography >
                                Today is the {format(new Date(), 'do MMMM Y')}
                            </Typography>
                        </Hidden>
                        }
                    </div>
                    <Typography className={classes.name}>
                        Quy Minh
                    </Typography>
                    <Avatar src="/Kaka.jpg" className={classes.avatar}/>
                </div>
                
                <div className={classes.redirect}>
                    <Hidden mdUp>
                        <SideDrawerSm />    
                    </Hidden>
                </div>
            </Toolbar>
            
        </AppBar>
    );
}

export default Appbar;