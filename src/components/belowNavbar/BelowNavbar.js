import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Colors} from '../../settings'

function BelowNavbar() {
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{ width: '100%' }} >
            <BottomNavigation
                showLabels
                value={value}
                sx={{ bgcolor: Colors.backgroundColor }}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction sx={{ color: 'white' }} label="Sillones" />
                <BottomNavigationAction sx={{ color: 'white' }} label="Sofa Cama" />
                <BottomNavigationAction sx={{ color: 'white' }} label="Respaldos" />
                <BottomNavigationAction sx={{ color: 'white' }} label="Bauleras" />
                <BottomNavigationAction sx={{ color: 'white' }} label="Puff" />
                <BottomNavigationAction sx={{ color: 'white' }} label="Camastro" />
            </BottomNavigation>
        </Box>

    )
}

export default BelowNavbar