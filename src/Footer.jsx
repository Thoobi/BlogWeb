import React from "react";
import { useState, useEffect } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () =>
{
    const [currentYear, setCurrentYear] = useState();

    useEffect(() => {
        const getCurrentYear = () => {
            const year = new Date().getFullYear();
            setCurrentYear(year);
    };
        getCurrentYear();
    }, []);

    return (
            <div className="footer" style={{ 'height': '40px','display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'margin': '0 100px 0 100px'}}>
                <div style={{'display': 'flex', 'justifyContent': 'center'}}>
                <h4 style={{'fontWeight': 'bold'}}>hotcoffee</h4>
                <h1 className="text-ash text-center font-regular text-medium">
                 &copy; { currentYear } all rights reserved
                </h1>
                </div>
                <div style={{'width': '80px', 'display': 'flex', 'justifyContent': 'space-between'}}>
                <FaLinkedin />
                <FaXTwitter />
                <FaInstagram />
                </div>
            </div>
    );
}

export default Footer