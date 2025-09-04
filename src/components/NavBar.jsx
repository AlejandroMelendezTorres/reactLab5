import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav style={{ width: '100%', background: '#2196f3', padding: '10px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#fff' : '#e3f2fd', textDecoration: 'none', fontWeight: 'bold' })}>Home</NavLink>
            <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? '#fff' : '#e3f2fd', textDecoration: 'none', fontWeight: 'bold' })}>Login</NavLink>
            <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? '#fff' : '#e3f2fd', textDecoration: 'none', fontWeight: 'bold' })}>Dashboard</NavLink>
        </nav>
    );
}

export default Navbar
