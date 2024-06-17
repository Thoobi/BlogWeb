import React from "react";
import { useState, useEffect } from 'react';

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
            <div className=" flex justify-center items-center h-20 w-full bg-stone-200 text-black mt-5">
                <h1 className="text-black text-center font-bold text-lg">
                &copy; The chefs! { currentYear }
                </h1>
            </div>
    );
}

export default Footer