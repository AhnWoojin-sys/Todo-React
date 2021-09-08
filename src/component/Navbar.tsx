import React, {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoimg from './images/logo.png';
import styled from 'styled-components';
import  MenuItems from "./Menuitems";

function Navbar(){
    const[open, setOpen] = useState(false);
        return (
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">TodoApp<img src={logoimg}></img></h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item: any, index: any)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
}
export default Navbar;