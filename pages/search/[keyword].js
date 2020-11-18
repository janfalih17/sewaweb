import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import HomeSearchBar from '../../components/HomeSearchBar';
import config from '../../config';
import Button from '../../components/Button'
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/NavBar';
import ListCard from '../../components/ListCard';
const Search = () => { 
    const router = useRouter();
    const [sidebar, setSidebar] = useState(false);
    const { keyword } = router.query
    return(
        <div className={`relative h-screen w-full`}>
            <Head>
                <title>{`Jasa ${keyword} Di ${config.SITE_NAME}`}</title>
            </Head>
            <Navbar sidebar={sidebar} onClick={() => setSidebar(!sidebar)}/>
            <div className="relative mb-12 h-40 w-full flex justify-center items-center p-5 lg:px-10 bg-green-500">
                <HomeSearchBar populer placeholder="Cari Disini.." value={keyword}/>
            </div>
            <div className="flex h-auto w-full mb-16 flex-wrap justify-center px-5 lg:px-10">
                <ListCard/>
                <ListCard/>
                <ListCard/>
            </div>
            <div className="w-full fixed flex bottom-0 bg-white border-t justify-between">
                <button className="p-2 px-5 rounded bg-orange-400 text-white w-3/6 m-2 text-sm flex items-center justify-center"><i className="ri-equalizer-fill ri-md"></i>&nbsp;Filter</button>
                <button className="p-2 px-5 rounded bg-orange-400 text-white w-3/6 m-2 text-sm flex items-center justify-center"><i className="ri-filter-3-line ri-md"></i>&nbsp;Urutkan</button>
            </div>
        </div>
    )
}

export default Search;