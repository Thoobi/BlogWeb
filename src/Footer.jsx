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
            <div className="h-10 w-full flex items-center justify-between border border-t-0.5 border-custom-gray pl-[105px] pr-[105px]">
                <div className="flex justify-center">
                <h4 className="font-bold">hotcoffee</h4>
                <h1 className="text-ash text-center font-regular text-medium">
                 &copy; { currentYear } all rights reserved
                </h1>
                </div>
                <div className="w-[80px] flex justify-between">
                <FaLinkedin />
                <FaXTwitter />
                <FaInstagram />
                </div>
            </div>
    );
}

export default Footer