import React from 'react'
import PropTypes from 'prop-types'
import { Link, BrowserRouter as Router } from 'react-router-dom'

function Navbar({ title }) {
    return (
        <Router>
            <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
                <a href="/" className="navbar-brand">
                    {title}
                </a>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a href="/add" className="nav-link">
                            Add User
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a href="/github" className="nav-link">
                            Project Files
                        </a>
                    </li>
                </ul>
            </nav>
        </Router>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: 'Default App',
}
export default Navbar
