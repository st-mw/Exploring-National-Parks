/**
 * Renders a navigation bar component with links to different pages.
 * @module Navbar
 * @memberof GlobalComponents
 * 
 * @returns {JSX.Element} The rendered navigation bar component.
 */
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/navbar.css'
import tree from './tree.png'

const Navbar = () => {

    let index = Math.floor(Math.random() * 4);

    const activeCams = ["https://www.nps.gov/chis/learn/photosmultimedia/ocean-webcam.htm", 
        "https://www.nps.gov/chis/learn/photosmultimedia/bald-eagle-webcam.htm", 
        "https://www.nps.gov/media/webcam/view.htm?id=81B4690A-1DD8-B71B-0B2D069E1CB02E6A",
        "https://www.nps.gov/media/webcam/view.htm?id=81B46955-1DD8-B71B-0B698C4D88410C05" 
    ]

    const link = `${activeCams[index]}`


    return (
        <nav className="nav-bar">
            <ul>
                <li className = "header">
                    <NavLink to="/">Exploring National Parks</NavLink>
                </li>
                <li className = "logo">
                    <img src = {tree} alt = "tree"/>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkSearch">Park Search</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkInfo" reloadDocument>Park Info</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkPlan">Park Planner</NavLink>
                </li>
                <li>
                    <NavLink to={link}>Random Live Webcam</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
