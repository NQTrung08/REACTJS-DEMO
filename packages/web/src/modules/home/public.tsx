import React from 'react'
import './home.css'

export const PublicScreen = () => {
    return (
        <div className='p-3'>
            <div className="header flex mb-2">
                <div className="logo w-1/3 text-center p-7 border-2">
                    logo
                </div>
                <div className="banner w-4/6 text-center p-7 border-2">
                    Banner
                </div>
            </div>
            <div className="menu border-2 p-3 mb-2">
                <div className='flex justify-between'>
                    <ul className="navigation-global flex gap-3">
                        <li>Home</li>
                        <li>Students</li>
                        <li>Courses</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <div className="search border-2 w-1/3 rounded-2xl pl-4 text-gray-300">
                        Search
                    </div>
                </div>
            </div>

            <div className="main flex gap-3">
                <ul className="submenu border-2 w-1/5 p-3">
                    <li>Introduction</li>
                    <li>News</li>
                    <li>Education</li>
                    <li>Register</li>
                    <li>Courses</li>
                </ul>
                <div className="content w-1/2">

                    <div className='flex gap-2 items-center justify-center w-full'>
                        <div className="hotnews flex-1 text-center pt-10 pb-10 border-2">
                            Hot News
                        </div>
                        <div className="photo flex-1 text-center pt-10 pb-10 border-2">
                            Photo Slide
                        </div>
                    </div>


                    <div className="items flex gap-2 mt-4">
                        <div className="news1 w-1/3 h-[150px] border-2 flex items-center justify-center">
                            News 1
                        </div>
                        <div className="news2 w-1/3 h-[150px] border-2 flex items-center justify-center">
                            News 2
                        </div>
                        <div className="news3 w-1/3 h-[150px] border-2 flex items-center justify-center">
                            News 3
                        </div>
                    </div>

                    <div className="items flex gap-2 mt-4">
                        <div className="news4 w-1/3 h-[150px] border-2 flex items-center justify-center">
                            News 4
                        </div>
                        <div className="news5 w-1/3 h-[150px] border-2 flex items-center justify-center">
                            News 5
                        </div>
                        <div className="news6 w-1/3 h-[150px] border-2 flex items-center justify-center">
                            News 6
                        </div>
                    </div>
                </div>


                <div className="sidebar border-2 flex-1">
                    Sidebar
                </div>
            </div>

            <div className="footer border-2 mt-5 p-3 flex justify-between">
                <p className="desc">

                    @2012 - TapChiLapTrinh
                </p>

                <ul className="navigation-footer flex gap-3">
                    <li>
                        <a href='#'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Student
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Courses
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}