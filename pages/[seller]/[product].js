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
import Button from '../../components/Button'
import ContactFooter from '../../components/ContactFooter'
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
    const [isFooterEvnet, setFooterEvent] = useState(true);
    const [image, setImage] = useState({
        name: 'pemandanganLqip',
        url : require('../../public/gambar/pemandangan.jpg?lqip')});
    useEffect(() => {
            setImage({
                name :'pemandanganOriginal',
                url :  require('../../public/gambar/pemandangan.jpg?original')});

    }, [setImage])
    const GalleryComponent = ({onClick, isActive}) => (
        <a className="rounded-full self-center"
			style={{
                width: isActive ? "12px" : "8px",
                height: isActive ? "12px" : "8px",
				backgroundColor: "#4a5568",
				margin: "0 2px",
				opacity: isActive ? "1" : "0.5",
			}}
			onClick={onClick}
		>
            </a>
    )
    const onScroll = () => {
        if(window.pageYOffset > 100){
            setFade(true);
        } else {
            setFade(false);
        }   
    }
    const footerDrag = (axis) => {
        if(axis === "y") {
            setFooterEvent(!isFooterEvnet)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', () => onScroll())
    })
    const animateFooter = {
        open: { bottom: -340},
        closed: {bottom: 0}
    }
    const animateBackButton = {
        open: { opacity: 1, display: 'block' },
        closed: { opacity: 0,  transitionEnd: {
            display: "none",
          }},
      }
    return (
        <div  className="h-auto w-full">
            
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
                    <motion.Button
                        onClick={() => router.back()}
                        initial="closed" 
                        transition={{ duration: 0.5 }}
                        animate={isFade ? "open" : "closed"}
                        variants={animateBackButton} className="bg-white shadow w-10 h-10 flex-none mr-3 rounded-full"><i class="ri-md ri-arrow-left-line"></i></motion.Button>
                    <div className="lg:w-3/6 w-full">
                        <span className="text-xs font-semibold">{isFade ? 'IsFade' : 'Is Not Fade'} > Category > Product</span>
                        <h1 className="font-bold text-base">{ product }</h1>
                    </div>
                    <div className="w-3/6 hidden lg:flex items-center">
                        <div className="w-3/6 flex mr-3 justify-around ">
                            <button className="bg-green-500 text-white font-semibold text-sm px-5 py-1 rounded shadow"><i className="fa fa-heart"></i> Loved!</button>
                            <button className="bg-green-500 text-white font-semibold text-sm px-5 py-1 rounded shadow"><i className="fa fa-heart"></i> Loved!</button>
                            <button className="bg-green-500 text-white font-semibold text-sm px-5 py-1 rounded shadow"><i className="fa fa-heart"></i> Loved!</button>
                        </div>
                        <div className="w-3/6 flex ml-3 justify-between">
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
                    <span className="absolute flex items-center p-2"><i class="ri-search-2-line"></i></span>
                    <input type="search" placeholder="Cari Disini" className="w-full font-semibold py-2 pr-5 pl-8 bg-gray-200 rounded"></input>
                </motion.div>
            </div>
            <div  className="flex lg:flex-row flex-col p-5 lg:px-10">
                <div className="lg:w-4/6 w-full mb-4 lg:mr-5">
                    <div className="w-full h-32 mb-4 md:h-64 cursor-pointer">
                        <Slider 
                            auto={5000}
                            activeIndex={1}
                            hasBullets
                            BulletComponent={GalleryComponent}>
                                <img src={image.url} alt={image.name} className="h-full w-full"/>
                                <img src="/gambar/pemandangan.jpg" className="h-full w-full"/>
                                <img src="/gambar/pemandangan.jpg" className="h-full w-full"/>
                        </Slider>
                    </div>
                    <NavReview/>
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
                <div style={{top:125}} className="w-2/6 h-64 sticky hidden lg:block ml-5">
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
            <ContactFooter/>
        </div>
    )
}

export default Product