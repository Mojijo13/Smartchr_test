import anime from "animejs/lib/anime.es.js";
import React from 'react'
import Button from './Button'

const Remember = ({remember, onClick}) => {
  const animation = React.useRef(null);

  React.useEffect(() => {
    animation.current = anime({
      targets: '.quiz-page.remember .el-anim',
      translateY: [-20, 0],
      opacity: 1,
      duration: 400,
      delay: anime.stagger(100)
    });
  }, [])

  return (
    <div className='quiz-page remember'>
      <div className='text'>
        <h4 className="el-anim">{ remember.title }</h4>
        <h2 className="el-anim" dangerouslySetInnerHTML={{__html: remember.text }} />
      </div>
      <div className='-button el-anim'>
        <Button text={remember.button.text || null} onClick={onClick} />
      </div>
    </div>
  )
}

export default Remember