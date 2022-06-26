import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import {Colors} from '../../settings'


function BelowNavbarWithIcons() {
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{ width: '100%', marginBottom:10 }} >
            <BottomNavigation
                showLabels
                value={value}
                sx={{ bgcolor: '#fafafafa' }}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
               <BottomNavigationAction sx={{ color: Colors.backgroundColor, marginRight:30}} label="Ofertas" icon={<LoyaltyIcon />} />
                <BottomNavigationAction sx={{ color: Colors.backgroundColor, marginRight:30}} label="Retiro Inmediato" icon={<AddBusinessIcon />} />
                <BottomNavigationAction sx={{ color: Colors.backgroundColor, marginRight:30}} label="Entrega Express" icon={<LocalShippingIcon />} />
                <BottomNavigationAction sx={{ color: Colors.backgroundColor, marginRight:30}} label="Cuotas sin interes" icon={<CreditScoreIcon />} />
            </BottomNavigation>
        </Box>

    )
}

export default BelowNavbarWithIcons