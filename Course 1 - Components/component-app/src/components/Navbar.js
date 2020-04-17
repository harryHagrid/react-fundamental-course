import React, { Component } from 'react';
import '../styles/Navbar.css'
import logo from '../logo.svg';
// Class Level Component
class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="logo" />React Playground
                        
                        </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        );
    }
}

export default Navbar;