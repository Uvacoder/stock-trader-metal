import React from "react";
import gold from "../img/gold.jpg";
import silver from "../img/silver.jpg";
import piggy from "../img/piggy-bank.jpg";
import Menu from './Menu';

export default function About() {
return (
<div>
<Menu />
<h3>About Metal Trade</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<img src={gold} alt="gold bars" />
<img src={silver} alt="silver coins" />
<img src={piggy} alt="piggi bank" />
</div>
)
}