import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, styled, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Home from "./Home";
import Item from "./Item";
import Toggle from "./Toggle";
import About from "./About";
import Contact from './Contact';

import '../App.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#d8dee0',
        width: "100%",
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="#e7e7e7"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    centered
                >
                    <Tab label="HOME" {...a11yProps(0)} className="tabs" />
                    <Tab label="ITEM" {...a11yProps(1)} className="tabs" />
                    <Tab label="SETUP" {...a11yProps(2)} className="tabs" />
                    <Tab label="ABOUT" {...a11yProps(3)} className="tabs" />
                    <Tab label="CONTACT" {...a11yProps(4)} className="tabs" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Home />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Item />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Toggle />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <About />
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <Contact />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
