import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <h1>ADVENTURE AWAITS</h1>
            <p>WHAT ARE YOU WAITING FOR</p>
            <div className="hero-btns">
            <Button className="btns" buttonStyle="btn-outline" buttonSize="btn-large">
                GET STARTED
            </Button>
            <Button className="btns" buttonStyle="btn-primary" buttonSize="btn-large">
                TRAILER
            </Button>
            </div>
        </div>

    );
}
 
export default HeroSection;