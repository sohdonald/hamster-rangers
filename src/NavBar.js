import React from "react";
import {NavLink} from "react-router-dom"
import styles from "./NavBar.module.css"


function NavBar() {
    return (
        <nav className={styles.nav}>
            <h2>Hamster Rangers</h2>
            <ul>
            <NavLink
            to= "/"
            exact
      
            >
                Home
            </NavLink>
            <NavLink
            to= "/newrangerform"
            exact
            >
                New Ranger Recruit Form
            </NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;