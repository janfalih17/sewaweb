import Head from 'next/head'
import HomeSearchBar from '../components/HomeSearchBar'
import ProductCard from '../components/ProductCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
    <script src="https://kit.fontawesome.com/839f4c104f.js" crossorigin="anonymous"></script>
    </Head>
    <div className="h-auto w-full">
      <div className="w-full z-10 flex bg-green-500 justify-between items-center fixed p-5 lg:px-10">
        <span className="text-2xl text-white font-bold">Logo</span>
        <div className="w-auto hidden lg:flex">
          <ul className="flex">
            <li className="block m-2">
              <a className="text-white hover:bg-green-700 px-5 py-3 font-semibold" href="">
                Daftar
              </a>
            </li>
            <li className="block m-2">
              <a className="text-white hover:bg-green-700 px-5 py-3 font-semibold" href="">
                Daftar
              </a>
            </li>
            <li className="block m-2">
              <a className="text-white hover:bg-green-700 px-5 py-3 font-semibold" href="">
                Login
              </a>
            </li>
            <li className="block m-2">
              <a className="text-white hover:bg-white hover:text-green-600 hover:border-none px-5 py-3 shadow-xl border-white border-2 rounded font-semibold" href="">
                Jadi Freelancer?
              </a>
            </li>
          </ul>
        </div>
        <button className="w-10 h-10 flex-none hover:bg-white hover:text-green-500 rounded border-white text-white block lg:hidden border-2 shadow-xl">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className="relative mb-20 h-64 w-full flex justify-center items-center bg-green-500">
        <h1 className="text-xl lg:text-4xl text-white text-center font-bold">
          Punya <i className="font-medium">Website</i> Dan <i className="font-medium">Aplikasi</i><br/>Dengan Mudah Disini
        </h1>
        <HomeSearchBar/>
      </div>
      <div className="flex h-auto w-full flex-wrap justify-center">
        <ProductCard/>
      </div>
    </div>
    </>
  )
}
