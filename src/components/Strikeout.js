import React from 'react'
import anime from "animejs/lib/anime.es.js";
import { ReactComponent as Svg } from '../svg/strikeout.svg';

const Strikeout = () => {
  const animationSvg = React.useRef(null)

  React.useEffect(() => {
    animationSvg.current = anime({
      targets: '.strikeout-svg path',
      strokeDashoffset: [anime.setDashoffset, 10],
      easing: 'easeInOutSine',
      duration: 400,
      delay: function(el, i) { return i * 250 },
      loop: false
    })
  }, [])

  return (
    <Svg className='strikeout-svg'/>
  )
}

export default Strikeout