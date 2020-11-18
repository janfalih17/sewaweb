import React, { useRef } from 'react'
import { Link } from 'react-scroll'
import style from './navReview.module.css'
const NavReview = (props) => {
    const handleSetActive = (to) => {
        console.log('a', to);
    }
    return(
        <div style={{top: 55}} className="w-full z-10 mb-2 border-b text-sm overflow-x-auto font-semibold bg-white sticky flex flex-row justify-between items-center">
            <Link duration={0} delay={0} activeClass="border-b-4 border-green-400" isDynamic={true} offset={-180} className="px-5 py-2 text-center w-full" to="test1" smooth spy hashSpy>Deskripsi</Link>
            <Link duration={0} delay={0} activeClass="border-b-4 border-green-400" isDynamic={true} offset={-180} className="px-5 py-2 text-center w-full" to="test3" smooth spy hashSpy>Rekomendasi</Link>
            <Link duration={0} delay={0} activeClass="border-b-4 border-green-400" isDynamic={true} offset={-180} className="px-5 py-2 text-center w-full" to="test4" smooth spy hashSpy>Reviews</Link>
            <Link duration={0} delay={0} activeClass="border-b-4 border-green-400" isDynamic={true} offset={-180} className="px-5 py-2 text-center w-full" to="test5" smooth spy hashSpy>Faq</Link>
        </div>
    )
}

export default NavReview