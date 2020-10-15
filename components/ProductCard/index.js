import React from 'react'
import style from './productCard.module.css'
const ProductCard = () => (
    <a onClick={() => window.location.href = "http://localhost:3000/janfalih/saya akan membuat website ppob"} className={style.product__card}>
        <div className="relative bg-gray-500 h-32 rounded-t w-full">
            <a className="absolute right-0 top-0 m-2 text-gray-600 hover:text-gray-800 text-2xl">
            <i class="fa fa-heart"></i>
            </a>
        </div>
        <div className=" h-40 flex flex-col justify-around w-full p-3">
            <span className={style.product__title}>Saya akan membuat website ppob</span>
            <div className="w-full flex items-center">
                <div className="relative flex-none mr-2 h-10 w-10 bg-gray-600 rounded-full">
                    <div className="absolute h-3 w-3 border-2 right-0 top-0 border-white rounded-full bg-green-400"></div>
                </div>
                <div className="w-full flex flex-col">
                    <span className="text-sm font-semibold">Jan Falih</span>
                    <span className="text-xs text-orange-500 font-semibold">Top Seller</span>
                </div>
            </div>
            <div className="w-full flex items-center justify-between">
                <span className="text-orange-400 font-semibold text-base"><i className="fa fa-star"></i> 5.0</span>
                <span className="font-semibold text-sm text-green-600">Rp 1000.000.000</span>
            </div>
        </div>
    </a>
)

export default ProductCard