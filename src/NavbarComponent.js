import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const cartSize = useSelector(state => {
    return state.cart.length;
  })
  return (
    <Navbar className='fixed-top d-flex' bg="dark text-light" expand="lg">
      <Link to={'/'}>
        <Navbar.Brand href="javascript:void(0)" className='text-light font-weight-bold'>
          <button type='button' className='btn text-light'>
            My App
          </button>

        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to={'/'}>
            <button type='button' className='btn'>
              <Nav.Link className='text-light' href="javascript:void(0)">Home</Nav.Link>

            </button>
          </Link>
          <Link to={'/'}>
            <button type='button' className='btn' >
              <Nav.Link className='text-light' href="javascript:void(0)">Products</Nav.Link>
            </button>
          </Link>

          <button className='btn btn-outline-light stl'>Login</button>
          <Link to={'/cart'}><Nav.Link className='text-light' href="javascript:void(0)"> 
            <svg className='mt-2 cartIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span class="badge badge-light">{cartSize}</span>

          </Nav.Link></Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
