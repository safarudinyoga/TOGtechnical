import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import { House, HouseFill, Briefcase, BriefcaseFill } from 'react-bootstrap-icons';
import './_sidebar.css'

const Sidebar = props => {
  const [active, setActive] = useState('1')

  return (
    <>
      <Nav
        className="d-none d-md-block sidebar"
        defaultActiveKey='1'
        onSelect={selectedKey => {
          setActive(selectedKey)
        }}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item className='wrapper-nav'>
          <Nav.Link eventKey='1'>
            {active === '1' ? <HouseFill size={22} color="#fff" /> : <House size={22} color="#fff" /> }
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='wrapper-nav'>
          <Nav.Link eventKey="2">
            {active === '2' ? <BriefcaseFill size={22} color="#fff" /> : <Briefcase size={22} color="#fff" />}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

Sidebar.propTypes = {}

export default Sidebar