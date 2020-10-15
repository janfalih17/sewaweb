import React, { useRef } from 'react'
import { Link } from 'react-scroll'
import style from './navReview.module.css'
const NavReview = (props) => {
    const handleSetActive = (to) => {
        console.log('a', to);
    }
    return(
        <div style={{top:125}} className="w-full z-10 text-sm overflow-x-auto font-semibold bg-white sticky flex flex-row justify-between items-center shadow rounded">
           <Link activeClass="active" className="px-5 py-2 text-center w-full "  to="test1" spy={true} offset={-500}>1</Link>
           <Link activeClass="active"  offset={50} onSetActive={(a) => handleSetActive(a)} className="px-5 py-2 text-center w-full " to="test2" spy={true} smooth={true} duration={500}>2</Link>
           <Link activeClass="active"  offset={50} onSetActive={(a) => handleSetActive(a)} className="px-5 py-2 text-center w-full " to="test3" spy={true} smooth={true} duration={500}>3</Link>
        </div>
    )
}

export default NavReview