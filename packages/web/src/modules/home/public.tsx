import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Nav'
import SubMenu from './components/Submenu'
import Content from './components/content'
import SideBar from './components/Sidebar'

export const PublicScreen = () => {
    return (
        <div className='p-3 min-h-screen flex flex-col'>
            <Header />
            <Navigation />

            <div className="flex gap-3 flex-grow">
                <SubMenu />
                <Content />
                <SideBar />
            </div>

            <Footer />
        </div>
    )
}
