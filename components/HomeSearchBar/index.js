import { useState } from 'react'
import style from './searchBar.module.css'
const HomeSearchBar = () => {
  const [keyword, setKeyword] = useState(null);
  const onPress = () => {
    window.location.href = 'http://localhost:3000/janfalih/' + keyword;
  }
    return(
      <>
        <div className={style.box__search}>
          <div className={style.search}>
            <input value={keyword} onChange={(event) => setKeyword(event.target.value)} type="search" placeholder="Cari Disini.."></input>
            <button onClick={() => onPress()} className={style.button}>Cari</button>
          </div>
          <div className={style.footer__search}>
            <span className="font-semibold m-1">Populer:</span><a className="hover:bg-green-500 hover:text-white hover:border-none border-green-500 border m-1 rounded p-1 text-green-500">ui design</a><a className="border-green-500 border m-1 rounded p-1 text-green-500">ui design</a>
          </div>
        </div>
      </>
    )
}

export default HomeSearchBar