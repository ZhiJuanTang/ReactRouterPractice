import React from 'react';
import { Link, NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to='/welcome'>welcome</NavLink> 
                    {/* <NavLink activeClassName={classes.active}> can be used to highlight the active navigation item.    NavLink is an active link */}
                    {/*<Link to='/welcome'>welcome</Link>  is better than <a href='/welcome'>welcome</a> because 'a href' send new request to http and the whole single page react app will restart, so all data are gone. */}
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/products'>products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader