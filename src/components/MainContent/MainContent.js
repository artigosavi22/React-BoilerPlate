import React from 'react';
import './MainContent.css';

import {Box, TextField ,Container,Typography } from '@mui/material';

const MainContent = () => {
    return (
        <Container className='main-content-container' >
            <div className='title'>
                <Typography variant="h5" gutterBottom  >
                    Title
                </Typography>
            </div>
           
            <div>
            <Box className='main-form'>
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
            </div>
            
        </Container>
    );
};

export default MainContent;
