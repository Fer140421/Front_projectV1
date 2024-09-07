"use client";

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown, Form } from 'react-bootstrap'; // Asegúrate de importar Form para el buscador
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import { useRouter } from 'next/router'; // Importa useRouter para la navegación

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false); // Estado para controlar la visibilidad del buscador
  //const router = useRouter(); // Hook para manejar la navegación

  // Función para mostrar u ocultar el buscador
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  // Función para redirigir a la página del carrito
  const goToCart = () => {
    router.push('/carrito'); // Cambia '/carrito' por la ruta deseada
  };

  // Función para redirigir a la página de perfil
  const goToProfile = () => {
    router.push('/perfil'); // Cambia '/perfil' por la ruta deseada
  };

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="border-0 fixed-top"
      style={{ zIndex: 1030, paddingTop: '20px', paddingBottom: '10px' }} // Ajusta el padding para mover el header abajo
    >
      <Container className="d-flex justify-content-between align-items-center position-relative">
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            width: '100%',
            borderBottom: '2px solid #cccccc',
            transform: 'translateX(-50%)',
            zIndex: 1 
          }}
        ></div>

        
        <Navbar.Brand href="/" className="mx-auto" style={{ zIndex: 2 }}>
          {/*<img
            src="/path/to/logo.png"
            alt="CLOTHES Logo"
            className="d-inline-block align-top"
            style={{ height: '30px' }}
          />*/}
          <h1>CLOTHES</h1>
        </Navbar.Brand>

        {/* Links de navegación centrados */}
        <Nav className="mx-auto" style={{ zIndex: 2 }}>
          <Nav.Link href="/" className="text-muted">Inicio</Nav.Link>
          {/* Menú desplegable para Tienda */}
          <NavDropdown title="Tienda" id="tienda-dropdown" className="text-muted">
            <NavDropdown.Item href="/tienda/hombres">Hombres</NavDropdown.Item>
            <NavDropdown.Item href="/tienda/mujeres">Mujeres</NavDropdown.Item>
            <NavDropdown.Item href="/tienda/ninos">Niños</NavDropdown.Item>
         
          </NavDropdown>
          <Nav.Link href="/sobre-nosotros" className="text-muted">Sobre Nosotros</Nav.Link>
          <Nav.Link href="/contacto" className="text-muted">Contacto</Nav.Link>
        </Nav>

        {/* Botones alineados a la derecha */}
        <div className="d-flex align-items-center position-relative" style={{ zIndex: 2 }}>
          {searchVisible && (
            <div className="position-relative me-2" style={{ zIndex: 2 }}>
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Buscar..."
                  autoFocus
                  style={{ 
                    width: '250px', // Ajusta el ancho según sea necesario
                    border: '1px solid #cccccc', // Línea gris
                    borderRadius: '20px', // Bordes redondeados
                    padding: '5px 10px', // Ajusta el padding
                    marginTop: '-10px', // Mueve el buscador hacia arriba
                    boxShadow: 'none', // Elimina la sombra de enfoque
                    outline: 'none' // Elimina el contorno azul en algunos navegadores
                  }} 
                />
              </Form>
            </div>
          )}
          <Button variant="link" className="text-dark" onClick={toggleSearch}>
            <FaSearch />
          </Button>
          <Button variant="link" className="text-dark" onClick={goToCart}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              3
            </span>
            <FaShoppingBag />
            
          </Button>
          <Button variant="link" className="text-dark" onClick={goToProfile}>
            <FaUser />
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
