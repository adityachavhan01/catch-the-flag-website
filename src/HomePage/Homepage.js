import React, { Component } from 'react';
import './Homepage.css'; // Import your CSS file
import NavBar from './NavBar';
import Body from './Body';
import Logo from './Logo';
import Chart1 from './Chart1';

export class Homepage extends Component {
    render() {
        return (
            < >
                <div className="app-container">
                    <Logo />
                    <NavBar />
                </div>
                    <Body />
                <div className="chart-container">
                    <Chart1 />
                </div>
            </>
        );
    }
}

export default Homepage;
