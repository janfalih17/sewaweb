import { motion, motionValue, useMotionValue } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { animated, useSprings } from 'react-spring';
import { useDrag, useGesture } from 'react-use-gesture';
import Slider from  "@farbenmeer/react-spring-slider";

const Otak = () => {
  const index = useRef(0)
  const x = motionValue(720);
  const onDragSlider = (event, info) => {
    x.set(info.point.x + 350  - 150);
    console.log("ini x",info.point.x)
  }
  const onDragEnd = (event, info) => {
      console.log("ini end x", info.point.x);
  }
    return(
        <div className="bg-red-800 h-screen w-full flex flex-col justify-center items-center">
           <div style={{width:700}} className="bg-white h-64">
           <Slider
			hasBullets>
                <div>child 1</div>
                <div>child 2</div>
                <div>child 3</div>
		      </Slider>
          </div>
        </div>
    )
}

export default Otak