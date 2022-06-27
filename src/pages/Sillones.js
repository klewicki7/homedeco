import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TableTrolley from '../components/tableTrolley/TableTrolley'
import Button from 'react-bootstrap/Button';
import Summary from '../components/summary/Sumary'
import { Colors } from '../settings';

export default function Sillones() {

    return (
        <Box sx={{ 
            flexGrow: 1 , 
            marginTop: 2, 
            }}>
            <Grid container spacing={2}>
                <Grid item xs={7} >
                    <TableTrolley/>
                </Grid>
                <Grid item xs={5} >
                    <Summary />
                </Grid>
                <Grid item xs={4}>
                    <Button style={{backgroundColor: Colors.BgColorButton}}>Contained</Button>
                </Grid>
            </Grid>
        </Box>
    )
}
