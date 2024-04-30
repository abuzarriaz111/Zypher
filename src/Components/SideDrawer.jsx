// SideDrawer.js
import React from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SideDrawer = ({ open, onClose }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <List>
                <ListItem button onClick={onClose}>
                    <ListItemText primary="Item 1" />
                </ListItem>
                <ListItem button onClick={onClose}>
                    <ListItemText primary="Item 2" />
                </ListItem>
                {/* Add more list items as needed */}
            </List>
        </Drawer>
    );
}

export default SideDrawer;
