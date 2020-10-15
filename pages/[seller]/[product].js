import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import {useSprings, animated} from 'react-spring'
import { useDrag, useGesture } from 'react-use-gesture'
import Slider from '@farbenmeer/react-spring-slider'
import Head from 'next/head'
import { motion } from 'framer-motion'
import NavReview from '../../components/NavReview'
import { Link, Element } from 'react-scroll'
import ProductCard from '../../components/ProductCard'
const FaqData = [{
    id: 1,
    question: "Jakarta itu kota atau provinsi?",
    answer: "This is answer for lorem ipsum dolor sit amet",
    isOpen: false
}, {
    id:2,
    question :"Lorem ipsum itu apa?",
    answer: "Untuk cara tutor membuat kata contoh",
    isOpen: false
}]
const Product = () => {
    const router = useRouter()
    const { seller, product } = router.query;
    const  scrollLeft = useRef(null);
    const [isFade, setFade] = useState(false);
    const GalleryComponent = ({onClick, isActive}) => (
        <li className="rounded-full self-center"
			style={{
                width: isActive ? "12px" : "8px",
                height: isActive ? "12px" : "8px",
				backgroundColor: "#4a5568",
				margin: "0 2px",
				opacity: isActive ? "1" : "0.5",
			}}
			onClick={onClick}
		>
            </li>
    )
    const onScroll = () => {
        if(window.pageYOffset > 100){
            setFade(true);
        } else {
            setFade(false);
        }   
    }
    
    const handleSetActive = () => {

    }
    useEffect(() => {
        window.addEventListener('scroll', () => onScroll())
    })
    const animateBackButton = {
        open: { opacity: 1, display: 'block' },
        closed: { opacity: 0,  transitionEnd: {
            display: "none",
          }},
      }
    return (
        <div  className="h-auto w-full">
            
    <Head>
        <script src="https://kit.fontawesome.com/839f4c104f.js" crossorigin="anonymous"></script>
    </Head>
            <div className="relative ml-20w-full border-b flex bg-white justify-between p-5 lg:px-10">
                <span className="text-2xl text-gray-700 font-bold">Logo</span>
                <div className="w-auto hidden lg:flex">
                <ul className="flex ">
                    <li className="block m-2">
                    <a className=" text-gray-700 hover:text-green-500 text-base px-5 py-3 font-semibold" href="">
                        Terms Of Service
                    </a>
                    </li>
                    <li className="block m-2">
                    <a className=" text-gray-700 hover:text-green-500 text-base px-5 py-3 font-semibold" href="">
                        Daftar
                    </a>
                    </li>
                    <li className="block m-2">
                    <a className=" text-gray-700 hover:text-green-500 text-base px-5 py-3 font-semibold" href="">
                        Login
                    </a>
                    </li>
                    <li className="block m-2">
                    <a className=" text-gray-700 hover:text-green-500 hover:border-green-500  text-base hover:border-none px-5 py-3 shadow-lg border-gray-700 border-2 rounded font-semibold" href="">
                        Jadi Freelancer?
                    </a>
                    </li>
                </ul>
                </div>
                <button className="w-10 h-10 flex-none hover:bg-white hover:text-green-500 rounded border-white text-white block lg:hidden border-2 shadow-xl">
                <i className="fa fa-bars"></i>
                </button>
            </div>
            <div className="sticky z-10 top-0 flex flex-col w-full border-b bg-white px-5 py-2 lg:px-10">
                <div className="flex justify-between py-2 items-center">
                    <motion.button
                        initial="closed" 
                        transition={{ duration: 0.5 }}
                        animate={isFade ? "open" : "closed"}
                        variants={animateBackButton} className="bg-white shadow w-10 h-10 flex-none mr-3 rounded-full"><i className="fa fa-arrow-left"></i></motion.button>
                    <div className="lg:w-2/6 w-full">
                        <span className="text-xs font-semibold">{isFade ? 'IsFade' : 'Is Not Fade'} > Category > Product</span>
                        <h1 className="font-bold text-base">{ product }</h1>
                    </div>
                    <div className="w-4/6 hidden lg:flex justify-around items-center">
                    <div className="w-3/6 flex justify-around ">
                        <button className="bg-green-500 text-white font-semibold text-sm px-5 py-1 rounded shadow"><i className="fa fa-heart"></i> Loved!</button>
                        <button className="bg-green-500 text-white font-semibold text-sm px-5 py-1 rounded shadow"><i className="fa fa-heart"></i> Loved!</button>
                        <button className="bg-green-500 text-white font-semibold text-sm px-5 py-1 rounded shadow"><i className="fa fa-heart"></i> Loved!</button>
                    </div>
                    <div className="w-3/6 flex justify-around">
                    <div className="w-auto flex items-center h-auto">
                            <div className="relative mr-2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-500">
                                <div className="absolute rounded-full right-0 w-4 h-4 lg:w-4 lg:h-4 bg-green-500 border-4 border-white"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-base">{ seller }</span>
                                <span className="font-semibold text-orange-500 text-xs">Top Seller</span>
                            </div>
                        </div>
                        <button className="shadow-lg text-xs  hover:bg-green-700 bg-green-500 rounded text-white font-semibold p-2">Contact Seller</button>
                    </div>
                </div>
                </div>
                <motion.div 
                        initial="closed" 
                        transition={{ duration: 0.5 }}
                        animate={isFade ? "open" : "closed"}
                        variants={animateBackButton} className="relative flex items-center text-sm text-gray-500 w-full rounded lg:hidden">
                    <span className="absolute p-2"><i className="fa fa-search"></i></span>
                    <input type="search" placeholder="Cari Disini" className="w-full font-semibold py-2 pr-5 pl-8 bg-gray-200 rounded"></input>
                </motion.div>
            </div>
            <div  className="flex lg:flex-row flex-col p-5  lg:px-10">
                <div className="lg:w-4/6 w-full mb-4 lg:mr-5">
                    <div className="w-full h-32 mb-4 md:h-64 cursor-pointer">
                        <Slider 
                            auto={5000}
                            activeIndex={1}
                            hasBullets
                            BulletComponent={GalleryComponent}>
                                <div className="h-full bg-gray-500 w-full"></div>
                                <img src="data:image/jpeg;base64,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" className="h-full w-full"/>
                                <img src="data:image/jpeg;base64,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" className="h-full w-full"/>
                        </Slider>
                    </div>
                    <div ref={scrollLeft} style={{top:130}} className=" w-full z-10 mb-4 text-sm overflow-x-auto font-semibold bg-white sticky flex flex-row justify-between items-center shadow rounded">
                        <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test1" spy={true} onSetActive={() => handleSetActive()} smooth={true}>Deskripsi</Link>
                        <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test2" spy={true} onSetActive={() => handleSetActive()} smooth={true}>Paket</Link>
                        <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test3" spy={true} smooth={true}>Rekomendasi</Link>
                        <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test4" spy={true} smooth={true}>Reviews</Link>
                        <Link activeClass="border-b-4 border-green-400" isDynamic={true} offset={-190} className="px-5 py-2 text-center w-full" to="test5" spy={true} smooth={true}>Faq</Link>
                    </div>
                    <Element className="w-full mb-4 " id="test1">
                        <h1 className="text-lg font-bold mb-2">Dijual website panel smm murah berkualitas</h1>
                        <p className="text-sm"><b>Lorem ipsum dolor sit amet</b>,
                        consectetur adipiscing elit.<br></br>Morbi placerat nunc non nisl vulputate fringilla. Donec sit amet luctus lorem. Phasellus vel placerat felis. <br></br><br></br>
                        <ul className="list-disc list-inside"><li>Mauris</li><li>tempusnisl at luctus pulvinar.</li></ul>Proin faucibus nisl nec nisl tincidunt tincidunt. Integer id mi vel magna tincidunt tempor quis non lorem. Nulla tortor justo, pretium a porttitor et, cursus ac eros. Aenean ornare mollis tempor. Curabitur ut risus scelerisque, pharetra massa vel, finibus justo. Nullam placerat auctor leo. Duis id erat eu purus eleifend scelerisque. Fusce in libero aliquet, aliquet felis eu, molestie nibh. Aliquam eget consectetur lorem. </p>
                    </Element>
                    <Element className="w-full h-auto mb-4 " id="test2">
                        <h1 className="font-bold text-base mb-4">Paket Panjual</h1>
                        <div className="w-full h-auto mb-4 border p-3">
                            <div className="relative flex items-center">
                                <input className="m-2" type="radio"></input>
                                <span className="font-semibold text-base mx-2">Basic Packages</span>
                                <span className="absolute right-0 font-semibold text-xs">Rp1000.000.000</span>
                            </div>
                            <p className="text-sm">2 Logo Paket, Lisensi, Stationery Design.</p>
                        </div>
                        <div className="w-full h-auto mb-4 border p-3">
                            <div className="relative flex items-center">
                                <input className="m-2" type="radio"></input>
                                <span className="font-semibold text-base mx-2">Basic Packages</span>
                                <span className="absolute right-0 font-semibold text-xs">Rp1000.000.000</span>
                            </div>
                            <p className="text-sm">2 Logo Paket, Lisensi, Stationery Design.</p>
                        </div>
                    </Element>        
                    <Element className="w-full h-auto mb-4 bg-gray-100 border p-4 lg:hidden" id="test3">
                        <h1 className="font-bold text-base tracking-wide mb-2">Rekomendasi Untukmu</h1>
                        <div className="w-auto h-auto flex overflow-x-scroll">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </Element>
                    <Element className="w-full h-auto mb-4 lg:hidden" id="test4">
                    <h1 className="font-bold text-base mb-4">Faq Penjual</h1>
                    {FaqData.map((element) => (
                            <div className="w-full h-auto text-sm font-semibold border-b border-gray-400 text-gray-800 py-3">{element.question}</div>
                        ))}
                </Element>
                </div>
                <div style={{top:130}} className="w-2/6 h-64 sticky hidden lg:block ml-5">
                    <div className="w-full h-auto mb-5 border p-3">
                        <div className="relative flex">
                            <input className="m-2" type="radio"></input>
                            <span className="font-semibold text-lg mx-2">Basic Packages</span>
                            <span className="absolute right-0 font-semibold text-lg">Rp1000.000.000</span>
                        </div>
                        <p className="text-base">2 Logo Paket, Lisensi, Stationery Design.</p>
                    </div>
                    <div className="w-full h-auto border p-3">
                        <div className="relative flex">
                            <input className="m-2" type="radio"></input>
                            <span className="font-semibold text-lg mx-2">Basic Packages</span>
                            <span className="absolute right-0 font-semibold text-lg">Rp1000.000.000</span>
                        </div>
                        <p className="text-base">2 Logo Paket, Lisensi, Stationery Design.</p>
                    </div>
                </div>
            </div>
            <motion.div  style={{height:400, bottom:-340}} drag="y" dragElastic={0}  dragConstraints={{ left: 0, top:-340, bottom:0, right: 0 }} className="fixed z-20 w-full border-t px-5 py-2 rounded-t-lg lg:hidden bg-white justify-between">
                    <div style={{height:3, top:5}} className="absolute w-10 rounded-full mr-auto ml-auto right-0 left-0 bg-gray-400"></div>
                    <div className="w-full flex items-center justify-between h-auto">
                        <div className="w-auto flex items-center h-auto">
                            <div className="relative mr-2 w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gray-500">
                                <div className="absolute rounded-full right-0 w-4 h-4 lg:w-5 lg:h-5 bg-green-500 border-4 border-white"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm">{ seller }</span>
                                <span className="font-semibold text-orange-500 text-xs ">Top Seller</span>
                            </div>
                        </div>
                        <button className="shadow-lg text-xs  hover:bg-green-700 bg-green-500 rounded text-white font-semibold p-2">Contact Seller</button>
                    </div>
            </motion.div>
        </div>
    )
}

export default Product