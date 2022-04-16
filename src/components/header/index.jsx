import React from 'react'
import PropTypes from 'prop-types'
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import { Bell, Question } from 'react-bootstrap-icons';
import './_header.css'
import CompanyLogo from '../../assets/BAYU BUANA_LOGO_HORIZONTAL_COLOR.svg'

const Header = props => {
  return (
    <Navbar className='navbar-header'>
      <Navbar.Brand href="#home">
        <img
          src={CompanyLogo}
          className="image"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav className="helpers">
          <Question size={24} color="#fff" />
        </Nav>
        <Nav className='notification'>
          <Bell size={25} color='#606060' />
          <div className='dot-notif' />
        </Nav>
        <Nav className='avatar'>
          <img className='avatar-img' alt='profile' src='https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80MzIxZDU3YzU3NGRlNmJiNWI5NmVmNTI1Y2VmZDNkZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.y4NP8GVphiN5mlyTAHieZOyPhRVXFFW3bg6kUwNWESY' />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {}

export default Header