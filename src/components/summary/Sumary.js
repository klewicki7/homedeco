import * as React from 'react';
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Colors } from '../../settings';

export default function MiddleDividers() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: Colors.backgroundColor }}>
      <Box sx={{ my: 1, mx: 1 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              Resumen de compra
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 1 }}>
        <Typography gutterBottom variant="body1">        
            Subtotal Precio de lista
        </Typography>
        <span>$39600</span>
      </Box>
      <Box sx={{ mt: 1, ml: 1, mb: 1 }}>
        <Button style={{backgroundColor: Colors.BgColorButton}}>Finaliza tu compra</Button>
      </Box>
    </Box>
  );
}
