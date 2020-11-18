import React from 'react'
import config from '../../config'
import Sidebar from '../Sidebar'
const Navbar = ({sidebar, onClick}) => {
    return(
        <>
        <Sidebar onCloseClick={() => onClick()} status={sidebar}></Sidebar>
        <div className={ `w-full z-10 flex justify-between  items-center bg-green-500 fixed py-3 px-5 lg:px-10`}>
            <span className="text-2xl text-white font-bold">{config.SITE_NAME}</span>
            <div className="w-auto hidden lg:flex">
                <ul className="flex">
                    <li className="block m-2">
                        <a className="text-white hover:bg-green-700 px-5 py-3 font-semibold" href="">
                            Daftar
                        </a>
                    </li>
                    <li className="block m-2">
                        <a className="text-white hover:bg-green-700 px-5 py-3 font-semibold" href="">
                            Daftar
                        </a>
                    </li>
                    <li className="block m-2">
                        <a className="text-white hover:bg-green-700 px-5 py-3 font-semibold" href="">
                            Login
                        </a>
                    </li>
                    <li className="block m-2">
                        <a className="text-white hover:bg-white hover:text-green-600 hover:border-none px-5 py-3 shadow-xl border-white border-2 rounded font-semibold" href="">
                            Jadi Freelancer?
                        </a>
                    </li>
                </ul>
            </div>
            <button onClick={() => onClick()} className="w-10 h-10 flex-none hover:bg-white hover:text-green-500 rounded border-white text-2xl text-white block lg:hidden border-2 shadow-xl">
                <i className="ri-menu-fill"></i>
            </button>
        </div>
        </>
    )
}

export default Navbar;