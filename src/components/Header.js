import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>&nbsp;
        <NavLink to="/create" activeClassName="is-active">Create an expense</NavLink>&nbsp;
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <br/><br/>
    </header>
);

export default Header;