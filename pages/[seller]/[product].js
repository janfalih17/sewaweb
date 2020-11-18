
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Slider from '@farbenmeer/react-spring-slider'
import { motion } from 'framer-motion'
import NavReview from '../../components/NavReview'
import { Element } from 'react-scroll'
import ProductCard from '../../components/ProductCard'
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
    const [sidebar, setSidebar] = useState(false);
    const [slideActive, setSlideActive] = useState(1);
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
        <a className=" text-xs right-0">1/4</a>
    )
    const onScroll = () => {
        if(window.pageYOffset > 100){
            setFade(true);
        } else {
            setFade(false);
        }   
    }
    useEffect(() => {
        window.addEventListener('scroll', () => onScroll())
    })
    const onSlideChange = (index) => {
        setSlideActive(index+1);
    }
    const navbarAnimation = {
        open: { backgroundColor: 'rgba(255, 255, 255, 1)' },
        closed: { backgroundColor: 'rgba(255, 255, 255, 0)' },
      }
    return (
        <div className={`w-full bg-gray-200 ${ sidebar ? 'h-screen overflow-hidden' : 'h-auto'}`}>
            <div  className="flex lg:flex-row flex-col ">
                <motion.div transition={{ duration: 0.5 }} animate={isFade ? "open" : "closed"} variants={navbarAnimation} className={`w-full z-40 flex items-center p-2 fixed `}>
                    <button className={`w-auto mr-2 h-auto rounded-full text-2xl ${ isFade ? 'text-gray-600' : 'text-gray-300' }  `}>
                        <i class="ri-arrow-left-line"></i>
                    </button>
                    <input placeholder="Jan.." className={`w-5/6 px-3 font-semibold text-gray-800 h-10 mr-2 bg-gray-300 rounded`}></input>
                    <div className="w-3/6 flex justify-around">
                        <button className={`w-auto h-auto rounded-full text-2xl ${ isFade ? 'text-gray-600' : 'text-gray-300' } `}>
                            <i class="ri-share-fill"></i>
                        </button>
                        <button className={`w-auto h-auto rounded-full text-2xl ${ isFade ? 'text-gray-600' : 'text-gray-300' } text-gray-400`}>
                            <i class="ri-more-2-fill"></i>
                        </button>
                    </div>
                </motion.div>
                <div className="relative w-full h-56 mb-2 md:h-64 cursor-pointer">
                    <span style={{bottom:'0.5rem', left:'0.5rem'}} className="absolute z-10 p-2 rounded tracking-widestx text-xs font-bold opacity-75 text-white bg-green-800">Logo BlaBla</span>
                    <span style={{bottom:'0.5rem', right:'0.5rem'}} className="absolute z-10 p-2 rounded tracking-widestx text-xs font-bold opacity-75 text-white bg-green-800">{slideActive}/3</span>
                    <Slider
                        auto={5000}
                        activeIndex={1}
                        onSlideChange={(index) => onSlideChange(index)}>
                            <img src={image.url} alt={image.name} className="h-full w-full bg-white"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqaIXu6TMKBLJST2yd6Vy-rUuItcZ1mdd0Hg&usqp=CAU" className="h-full w-full"/>
                            <img src="/gambar/pemandangan.jpg" className="h-full w-full"/>
                    </Slider>
                </div>
                <div className="w-full h-auto px-5 py-2 mb-2 bg-white shadow">
                    <div className="relative w-full flex ">
                        <h1 className="text-sm mb-2 font-semibold">{product}</h1>
                        <button className="absolute right-0 text-xl text-gray-400 hover:text-gray-600 h-auto flex-none "><i className="ri-heart-fill"></i></button>
                    </div>
                    <div className="w-full flex">
                        <button className="flex items-center mr-1 text-orange-500 border rounded-lg border-gray-300 p-2 text-xs">
                            <i className="ri-star-fill"></i>
                            <span className="font-semibold text-black ml-1">5.0</span>
                            <span className="text-gray-500 ml-1">(102)</span>
                        </button>
                        <button className="flex items-center text-orange-500 border rounded-lg border-gray-300 p-2 text-xs">
                            <span className="font-semibold text-black ml-1">Ulasan</span>
                            <span className="text-gray-500 ml-1">(102)</span>
                        </button>
                    </div>
                </div>
                <div className="w-full shadow p-2 px-5 mb-2 bg-white">
                    <h1 className="font-semibold text-xs mb-2">Pilih Paket:</h1>
                    <div className="flex w-full overflow-x-auto">
                        <button className="relative p-2 flex-none border-green-500 border rounded-md w-64 mr-3">
                            <div className="absolute right-0 top-0 w-8 h-8 bg-green-500 rounded-bl-full"></div>
                            <h1 className="text-sm font-semibold">MEGA SUPER PACKAGE</h1>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus neque ac sapien efficitur accumsan. Morbi volutpat arcu sit amet lacinia consectetur.</p>
                            <span className="font-semibold">Rp1.000.000.000</span>
                        </button>
                        <button className="p-2 flex-none hover:border-green-500 border rounded-md border-gray-200 w-64 mr-3">
                            <h1 className="text-sm font-semibold">MEGA SUPER PACKAGE</h1>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus neque ac sapien efficitur accumsan. Morbi volutpat arcu sit amet lacinia consectetur.</p>
                            <span className="font-semibold">Rp1.000.000.000</span>
                        </button>
                    </div>
                </div>
                <NavReview/>
                <div className="lg:w-4/6 w-full mb-4 px-5 lg:px-10 lg:mr-5 bg-white shadow py-2">
                    <Element className="w-full mb-4 " id="test1">
                        <p className="text-sm"><b>Lorem ipsum dolor sit amet</b>,
                        consectetur adipiscing elit.<br></br>Morbi placerat nunc non nisl vulputate fringilla. Donec sit amet luctus lorem. Phasellus vel placerat felis. <br></br><br></br>
                        <ul className="list-disc list-inside"><li>Mauris</li><li>tempusnisl at luctus pulvinar.</li></ul>Proin faucibus nisl nec nisl tincidunt tincidunt. Integer id mi vel magna tincidunt tempor quis non lorem. Nulla tortor justo, pretium a porttitor et, cursus ac eros. Aenean ornare mollis tempor. Curabitur ut risus scelerisque, pharetra massa vel, finibus justo. Nullam placerat auctor leo. Duis id erat eu purus eleifend scelerisque. Fusce in libero aliquet, aliquet felis eu, molestie nibh. Aliquam eget consectetur lorem. </p>
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
                <div style={{top:125}} className="w-2/6 h-64 sticky p-5 lg:px-10 hidden lg:block ml-5">
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
