import React from 'react'
import style from './Listcard.module.css';
const ListCard = () => {
    return(
        <div className={style.listcard}>
            <div className="flex items-stretch mb-2">
                <div className="bg-gray-800 rounded flex-none w-20 h-16">
                </div>
                <div className="flex flex-col w-full justify-between px-2">
                    <span className="text-sm font-semibold">Jual Website Panel SMM Murah Meriah MEriah</span>
                    <div className="text-xs text-orange-500 flex items-center"><i className="ri-star-fill"></i><span className="font-semibold">5.0</span>&nbsp;<span className="text-gray-500">(192)</span></div>
                </div>
                <button className="flex-none text-2xl text-gray-500 hover:text-gray-800"><i className="ri-heart-fill"></i></button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="flex flex-col px-1">
                        <span className="text-sm  font-semibold">Jan Falih</span>
                        <span className="text-xs font-semibold text-orange-500">Top Seller</span>
                    </div>
                </div>
                <span className="font-semibold text-sm text-green-500">Rp1000.000.000</span>
            </div>
        </div>
    )
}

export default ListCard