import React from "react"
import gold from "../img/gold.jpg"
import silver from "../img/silver.jpg"
import piggy from "../img/piggy-bank.jpg"
import Menu from './Menu'
import Footer from './Footer'
import "../styles/About.css"

export default function About() {
    return (
        <div className="About">
            <header>
                <Menu />
            </header>
            <div className="About-container">
                <div className="text">
                    <h3>About Metal Trade</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="images">
                    <img src={gold} alt="gold bars" />
                    <img src={silver} alt="silver coins" />
                </div>
                <img className="bottomImg" src={piggy} alt="piggi bank" />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}