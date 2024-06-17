import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import image1 from './assets/croods.png'
import image2 from './assets/hotcoffee.png'
import image3 from './assets/macman.png'
import image4 from './assets/laptop.png'
import image5 from './assets/laptop1.png'
import image6 from './assets/students.png'
import image7 from './assets/biglaptop.png'

const Home = () => {

    const[Timestamp, setTimestamp] = useState();

    useEffect(() => {
        const getLocalTimestamp = () => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.toLocaleDateString()}`;
        setTimestamp(formattedDate);
        // ${currentDate.toLocaleTimeString()}
    };
        // Get the initial timestamp
        getLocalTimestamp();
    
        // Optionally, update the timestamp every second (if you want a live clock)
        // const intervalId = setInterval(getLocalTimestamp, 1000);
    }, []);

return (
        <>
            <section className='h-120 w-full bg-stone-100 flex flex-row justify-between items-center gap-25 font-sans'>
                <div className='w-6/12 flex flex-col justify-center items-center'>
                    <h1 className="text-6xl font-black w-96 h-36">
                        Make better coffee
                        <img src={image2} alt='An image of a coffee' className='w-18 h-16 align-top inline' />
                    </h1>
                    <h4 className='text-3xl text-slate-600 font-medium'>Why learn how to blog?</h4>
                </div>
                <div className='w-6/12 flex flex-row justify-center items-center'>
                    <img src={image1} alt="an illustrated image" className='h-24 w-22' />
                </div>
            </section>

            <section className='flex flex-row justify-between items-center w-4/5 h-65 mx-auto my-8 border rounded-lg border-gray-300 p-0'>
                <div className='w-2/4 p-10 flex flex-col justify-start items-start'>
                    <h3 className='text-4xl font-bold text-black-500'>
                        Long established
                    </h3>
                    <p className='text-xl font-medium text-black mt-5'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                    </p>
                    <div className='flex flex-row justify-between items-center h-5 w-full mt-7'>
                        <span className='text-md font-bold text-gray-500'>{ Timestamp }</span>
                        <Link to='/articles' className='text-md font-bold'>Read more...</Link>
                    </div>
                    
                </div>
                <div className='w-2/5'>
                    <img src={image3} alt="A man with a macbook" className='w-full h-65 rounded-r-lg' />
                </div>
            </section>

            <section className='flex flex-row justify-between items-center w-4/5 mx-auto my-10'>

                <div className='bg-stone-100 w-30 h-100 p-3 shadow-lg rounded-lg hover:border hover:border-slate-100 hover:rounded-lg'>
                    <img src={image4} alt="An image of a man using a macbook" className='w-full h-52 rounded-lg' />
                    <h4 className='text-xl font-bold text-center py-2'>Why learn how blog works</h4>
                    <p className='font-medium px-2 w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <div className='flex flex-row justify-between items-center h-5 w-full mt-5'>
                        <span className='font-medium text-base'>{ Timestamp }</span>
                        <Link to='/articles' className='text-md font-bold text-black text-white bg-black w-32 py-2 px-2 rounded-full text-center hover:bg-inherit hover:border hover:border-black hover:text-black'>Read more...</Link>
                    </div>
                </div>

                <div className='bg-stone-100 w-30 h-100 p-3 shadow-lg rounded-lg hover:border hover:border-slate-100 hover:rounded-lg'>
                    <img src={image5} alt="An image of a man using a macbook" className='w-full h-52 rounded-lg' />
                    <h4 className='text-xl font-bold text-center py-2'>Why learn how blog works</h4>
                    <p className='font-medium px-2 w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <div className='flex flex-row justify-between items-center h-5 w-full mt-5'>
                        <span className='font-medium text-base'>{ Timestamp }</span>
                        <Link to='/articles' className='text-md font-bold text-black text-white bg-black w-32 py-2 px-2 rounded-full text-center hover:bg-inherit hover:border hover:border-black hover:text-black'>Read more...</Link>
                    </div>
                </div>
                
                <div className=' bg-stone-100 w-30 h-100 p-3 shadow-lg rounded-lg hover:border hover:border-slate-100 hover:rounded-lg'>
                    <img src={image6} alt="An image of a man using a macbook" className='w-full h-52 rounded-lg' />
                    <h4 className='text-xl font-bold text-center py-2'>Why learn how blog works</h4>
                    <p className='font-medium px-2 w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <div className='flex flex-row justify-between items-center h-5 w-full mt-5'>
                        <span className='font-medium text-base'>{ Timestamp }</span>
                        <Link to='/articles' className='text-md font-bold text-black text-white bg-black w-32 py-2 px-2 rounded-full text-center hover:bg-inherit hover:border hover:border-black hover:text-black'>Read more...</Link>
                    </div>
                </div>
            </section>

            <section className='flex flex-row justify-between items-center w-4/5 h-200 mx-auto my-5'>
                <div className='w-3/6 bg-slate-200 h-full px-10'>
                    <h1 className='text-5xl font-black mt-32 px-10'>
                        What is Lorem Ipsum?
                    </h1>
                    <p className='text-lg mt-5 px-10 w-3/4 font-medium text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                    <div className='flex flex-row justify-between items-center w-4/5 mx-10 h-20'>
                        <span>{ Timestamp }</span>
                        <Link to='/articles' className='text-md font-bold text-black text-white bg-black w-32 py-2 px-2 rounded-full text-center hover:bg-inherit hover:border hover:border-black hover:text-black'>Read more...</Link>
                    </div>
                </div>
                <div className='w-3/6'>
                    <img src={image7} alt="A laptop sitting on a desk" className='w-full h-200' />
                </div>
            </section>
        </>
    )
}

export default Home;