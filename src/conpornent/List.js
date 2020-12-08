import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import SpeakerIcon from '@material-ui/icons/Speaker';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MouseIcon from '@material-ui/icons/Mouse';
import MicIcon from '@material-ui/icons/Mic';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 1000,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="list">
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <h2>MY SETUP DETAILS</h2>
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem>
                    <ListItemIcon>
                        <DesktopWindowsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Monitor" />
                    <a href="https://amazon.co.jp/dp/B07NWT82B5"
                        target="_blank"
                        rel="noopener"
                    >PHILIPS 499P9H1/11</a>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SpeakerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Speaker" />
                    <a href="https://amazon.co.jp/dp/B0744LQXX5"
                        target="_blank"
                        rel="noopener"
                    >PM0.3H(W)</a>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <KeyboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Keybord" />
                    <a href="https://www.apple.com/jp/shop/product/MLA22J/A/magic-keyboard-%E6%97%A5%E6%9C%AC%E8%AA%9Ejis"
                        target="_blank"
                        rel="noopener"
                    >Magic Keyboard</a>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MouseIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mouse" />
                    <a href="https://amazon.co.jp/dp/B071Z2TFHX"
                        target="_blank"
                        rel="noopener"
                    >MX Master 2S</a>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MicIcon />
                    </ListItemIcon>
                    <ListItemText primary="Microphone" />
                    <a href="https://amazon.co.jp/dp/B000EOPQ7E"
                        target="_blank"
                        rel="noopener"
                    >Blue Micro Snowball</a>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <VideogameAssetIcon />
                    </ListItemIcon>
                    <ListItemText primary="Controller　　" />
                    <a href="https://www.xbox.com/ja-jp/accessories/controllers/grey-blue"
                        target="_blank"
                        rel="noopener"
                    >Xbox Wireless Controller</a>
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <LaptopMacIcon />
                    </ListItemIcon>
                    <ListItemText primary="My itx build" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <BuildIcon />
                            </ListItemIcon>
                            <ListItemText primary="CPU" />
                            <a href="https://amazon.co.jp/dp/B07MQP5LNM"
                                target="_blank"
                                rel="noopener"
                            >Core i5-9600KF</a>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <BuildIcon />
                            </ListItemIcon>
                            <ListItemText primary="MB" />
                            <a href="https://amazon.co.jp/dp/B07HM57LVH"
                                target="_blank"
                                rel="noopener"
                            >ASUS Z390-I GAMING</a>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <BuildIcon />
                            </ListItemIcon>
                            <ListItemText primary="RAM" />
                            <a href="https://amazon.com/dp/B07QQT5X5S"
                                target="_blank"
                                rel="noopener"
                            >T-Force Dark Pro 16GB</a>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <BuildIcon />
                            </ListItemIcon>
                            <ListItemText primary="GPU" />
                            <a href="https://www.nvidia.com/ja-jp/geforce/products/10series/geforce-gtx-1080/"
                                target="_blank"
                                rel="noopener"
                            >EVGA GTX1080</a>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <BuildIcon />
                            </ListItemIcon>
                            <ListItemText primary="PSU" />
                            <a href="https://amazon.co.jp/dp/B07JNF3G1G"
                                target="_blank"
                                rel="noopener"
                            >Corsair SF600 -PLATINUM-</a>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <BuildIcon />
                            </ListItemIcon>
                            <ListItemText primary="Case" />
                            <a href="https://www.geeekstore.com/shop/a60-plus-mini-itx-case/"
                                target="_blank"
                                rel="noopener"
                            >A60 PLUS MINI-ITX CASE</a>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <BuildIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cooler" />
                            <a href="https://www.ekwb.com/"
                                target="_blank"
                                rel="noopener"
                            >Custom water loop</a>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );
}