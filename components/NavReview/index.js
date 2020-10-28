import React, { useRef } from 'react'
import { Link } from 'react-scroll'
import style from './navReview.module.css'
const NavReview = (props) => {
    const handleSetActive = (to) => {
        console.log('a', to);
    }
    return(
        <div style={{top:120}} className=" w-full z-10 mb-4 text-sm overflow-x-auto font-semibold bg-white sticky flex flex-row justify-between items-center shadow rounded">
            <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test1" spy={true} onSetActive={() => handleSetActive()} smooth={true}>Deskripsi</Link>
            <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test2" spy={true} onSetActive={() => handleSetActive()} smooth={true}>Paket</Link>
            <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test3" spy={true} smooth={true}>Rekomendasi</Link>
            <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test4" spy={true} smooth={true}>Reviews</Link>
            <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test5" spy={true} smooth={true}>Faq</Link>
        </div>
    )
}

export default NavReview