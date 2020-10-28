import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Button from '../Button';

const ContactFooter = () => {
    const [isFooterEvent, setFooterEvent] = useState(true);
    const [isDragEnd, setIsDragEnd] = useState(false);
    const dragEvent = (axis) => {
        if(axis === "y" && isDragEnd === true) {
            setFooterEvent(!isFooterEvent)
        }
    }
    const animateFooter = {
        open: {bottom: -340},
        closed: { bottom: 0}
    }
    return(
        <motion.div 
        transition={{ duration: 1 }} animate={isFooterEvent ? "open" : "closed"} variants={animateFooter} style={{height:400, bottom:-340}}  className="fixed z-20 w-full lg:hidden bg-white">
            <motion.div onDragEnd={() => setIsDragEnd(true)} style={{bottom:0}} dragDirectionLock dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}  onDirectionLock={axis => dragEvent(axis)} className="w-full px-5 py-2 rounded-t-lg border-t flex justify-between bg-white"  drag="y" dragElastic={0.2}>
                <div style={{height:3, top:5}} className="absolute w-10 rounded-full mr-auto ml-auto right-0 left-0 bg-gray-400"></div>
                <div className="w-full flex items-center justify-between h-auto">
                    <div className="w-auto flex items-center h-auto">
                        <div className="relative mr-2 w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gray-500">
                            <div className="absolute rounded-full right-0 w-4 h-4 lg:w-5 lg:h-5 bg-green-500 border-4 border-white"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">Jan Aja</span>
                            <span className="font-semibold text-orange-500 text-xs ">Top Seller</span>
                        </div>
                    </div>
                    <Button color="green" text="Contact Seller" />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ContactFooter;