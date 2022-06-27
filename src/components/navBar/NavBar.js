import React from 'react'
import logo from '../../image.jpg'
import { Navbar, Nav, Image, Form, FormControl, Button, Container } from 'react-bootstrap'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar() {
  return (
    <Navbar bg={"dark"} expand="xl" >
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: 'white', marginRight: '30%' }}>
          <Image src={logo} style={{ width: 100 }} rounded={100} roundedCircle />
        </Navbar.Brand>
        <Form className="d-flex"
          style={{
            color: 'white', width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center', marginRight: '20%'
          }}>
          <FormControl
            type="search"
            placeholder="¿Que estas buscando?"
            className="me-2"
            aria-label="¿Que estas buscando?"
          />
          <Button variant="outline-success" style={{ color: 'white' }}>Buscar</Button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: 'fit-content',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                bgcolor: 'transparent',
                color: 'text.secondary',
                '& svg': {
                  m: 1.5,
                },
                '& hr': {
                  mx: 0.5,
                },
              }}
            >
              <Nav.Link href="#action1" style={{ color: 'white' }}>
                <AccountCircleIcon/>
                Mi Cuenta</Nav.Link>
              <Divider orientation="vertical" style={{ color: 'white', height:'100%', width:2 }} ></Divider>
              <Nav.Link href="#action1" style={{ color: 'white' }}>
                <ShoppingCartIcon/>
                Mi Carrito</Nav.Link>
            </Box>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
