import React from 'react';
import { List,ListItem ,ListItemText,Divider} from '@mui/material';


const Sidebar = () => {

    return (
       
            <List >
                <ListItem button>
                    <ListItemText primary="Sidebar Item 1" />
                </ListItem>
                <Divider component="li" />
                <ListItem button>
                    <ListItemText primary="Sidebar Item 2" />
                </ListItem>
                
            </List>
       
    );
};

export default Sidebar;
