import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './Footer.css';

const Footer = () => {
    return (
        <Container maxWidth="xl" className='mainFooter'>
            <Typography variant="body2" className='footer-content'>
            © {new Date().getFullYear()} AV Computers. All rights reserved.
            </Typography>
        </Container>
    );
};

export default Footer;
