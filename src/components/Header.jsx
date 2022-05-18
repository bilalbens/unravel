import React,{useEffect,useState} from 'react'
import Unravel_logo_black from "../resources/Unravel_logo_black.png"
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, NavLink} from "react-router-dom"




function Header() {


  return (
    <div>
        <nav className="navbar navbar-expand-lg text-bg-light p-3">
            <div className="container-fluid">
                
                <Link className="navbar-brand px-5" to="/home" >
                    <img src={Unravel_logo_black} alt="" width="72" height="21" />
                </Link>

                <button className="navbar-toggler togglerColor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon togglerColor">
                <FontAwesomeIcon icon="fa-solid fa-grip-lines" />
                </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarLinkul">
                    <li className={({ isActive }) => isActive ? "nav-item active" : "nav-item" } >
                        <NavLink className="nav-link navbarLink" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className={({ isActive }) => isActive ? "nav-item active" : "nav-item" }>
                        <aria className="nav-link navbarLink" href="#">Products</aria>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link navbarLink ">Content</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbarLink" href="#">Orders</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbarLink" href="#">Reporting</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbarLink" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbarLink" href="#">Admin</a>
                    </li>
                    
                </ul>
                <form className="d-flex justify-content-center" role="search">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                    <li  className={({ isActive }) => isActive ? "nav-item active" : "nav-item" } >
                        <NavLink to="/login" className="nav-link navbarLink" >Login</NavLink>                            
                     </li>
                            
                    </ul>

                </form>
                </div>
            </div>
        </nav>




    </div>
  )
}

export default Header