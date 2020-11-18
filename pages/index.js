import { motion } from 'framer-motion'
import Head from 'next/head'
import { useState } from 'react'
import HomeSearchBar from '../components/HomeSearchBar'
import Navbar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import SideBar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
    <div className={`relative h-screen w-full ${ sidebar ? 'overflow-hidden' : 'overflow-auto'}`}>
      <Navbar sidebar={sidebar} onClick={() => setSidebar(!sidebar)}/>
      <div className="relative mb-20 h-64 w-full flex justify-center items-center bg-green-500">
        <h1 className="text-xl lg:text-4xl text-white text-center font-bold">
          Punya <i className="font-medium">Coba</i> Dan <i className="font-medium">Aplikasi</i><br/>Dengan Mudah Disini
        </h1>
        <HomeSearchBar populer placeholder="Cari Disini..."/>
      </div>
      <div className="flex h-auto w-full flex-wrap justify-center px-5 lg:px-10">
        <ProductCard/>
      </div>
    </div>
    </>
  )
}
