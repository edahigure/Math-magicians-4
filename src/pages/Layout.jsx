import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <div className="wrapper-1">
                <h1>Math Magicians</h1>
                <nav>
                    <ul className="wrapper-2">
                        <li> <Link to="/Home">Home</Link> </li>
                        <li className="separator"> <Link to="/Calculator">Calculator</Link> </li>
                        <li> <Link to="/Quote">Quote</Link> </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>);
}