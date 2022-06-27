import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
function createData(name, precio, cantidad, subtotal, protein) {
  return { name, precio, cantidad, subtotal, protein };
}

const rows = [
  createData('Frozen yoghurt', 15900, 1, 15900),
  createData('Ice cream sandwich', 23700, 1, 23700),
];

export default function Sillones() {
  return (
    <TableContainer component={Paper} sx={{maxWidth: 450, margin: 'auto'}}>
      <Table sx={{ minWidth: 200, maxWidth: 200 , margin: 'auto'}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{justifyContent: 'space-around'}}>
            <TableCell align="right">Producto</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">${row.precio}</TableCell>
              <TableCell align="right">
              <RemoveIcon />
              {row.cantidad}
              <AddIcon />
              </TableCell>
              <TableCell align="right" sx={{display: 'flex', padding: 3}}>
              <DeleteForeverRoundedIcon/>
              ${row.subtotal}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
