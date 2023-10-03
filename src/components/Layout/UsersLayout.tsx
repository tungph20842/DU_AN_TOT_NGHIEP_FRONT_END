import { Outlet } from "react-router-dom"
import React from 'react'
import Header from "../Header"
import Footer from "../Footer"

const UsersLayout = () => {
    return (
        <div>

            <header>
                <Header/>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>

        </div>
    )
}

export default UsersLayout