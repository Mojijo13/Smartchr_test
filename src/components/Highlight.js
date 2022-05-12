import React from 'react'
import anime from "animejs/lib/anime.es.js";
import { ReactComponent as Svg } from '../svg/highlight.svg';

const Highlight = () => {
  const animationSvg = React.useRef(null)

  React.useEffect(() => {
    animationSvg.current = anime({
      targets: '.highlight-svg path',
      strokeDashoffset: [anime.setDashoffset, 10],
      easing: 'easeInOutSine',
      duration: 400,
      delay: function(el, i) { return i * 250 },
      loop: false
    })
  }, [])

  return (
    <Svg className='highlight-svg' />
  )
}

export default Highlight