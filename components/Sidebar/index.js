import { motion } from 'framer-motion'
import React from 'react'
import config from '../../config';
import * as style from './Sidebar.module.css';
const Sidebar = ({status, onCloseClick}) => {
    const sidebarAnimation = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }
    const itemSidebar = {
        open: i => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i  * 0.5,
          },
        }),
        closed: { opacity: 0, y: "-100%" },
    }
    const items = [{title: "TOS", subtitle:"Terms Of Service"},{title:"Currency: $", subtitle:"Terms Of Service"}, {title:"Language: EN", subtitle:"Terms Of Service"},{title:"Persyaratan EULA", subtitle:"Terms Of Service"}];
    
    return(
      <motion.div animate={status ? "open" : "closed"} variants={sidebarAnimation} className={style.sidebar}>
        <div className={style.sidebar__header}>
          <span className={style.sidebar__logo}>{config.SITE_NAME}</span>
          <button onClick={() => onCloseClick()}  className={style.sidebar__button}><i className="ri-close-fill"></i></button>
        </div>
        <div className={style.sidebar__body}>
          {items.map((item, i) => (
            <motion.li
              className={style.sidebar__list}
              custom={i}
              animate={status ? "open" : "closed"}
              variants={itemSidebar}
            ><a className={style.sidebar__list__item}>
              <div className={style.sidebar__list__col}>
                <span className={style.sidebar__list__title}>{item.title}</span>
                <span className={style.sidebar__list__subtitle}>{item.subtitle}</span>
              </div>
              <div className={style.sidebar__list__icon}><i className="ri-arrow-right-s-line"></i></div>
              </a></motion.li>
          ))}
        </div>
      </motion.div>
    )
}

export default Sidebar;