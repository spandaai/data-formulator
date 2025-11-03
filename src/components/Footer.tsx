// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import { Box, Typography } from '@mui/material';
import spandaLogo from '../assets/spanda-logo.png';

export const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40px',
                backgroundColor: '#0B0B0B',
                padding: '0 20px', // Add some padding for better logo visibility
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                borderTop: '1px solid #F5B300',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '12px',
                        fontWeight: 500,
                        color: 'white',
                    }}
                >
                    Powered by
                </Typography>
                <Box 
                    component="img" 
                    src={spandaLogo} 
                    alt="Spanda Logo"
                    sx={{
                        height: '20px',
                        width: 'auto',
                        // Remove the filter to show original logo colors
                    }}
                />
            </Box>
        </Box>
    );
};
