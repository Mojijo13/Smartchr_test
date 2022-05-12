import anime from "animejs/lib/anime.es.js";
import React from 'react'
import Button from './Button'

const Feedback = ({ quizResult, onClick, feedback, feedbackContent }) => {
  const animation = React.useRef(null);

  React.useEffect(() => {
    animation.current = anime({
      targets: '.quiz-page.feedback .el-anim',
      translateY: [-20, 0],
      opacity: 1,
      duration: 400,
      delay: anime.stagger(100)
    });
  }, [])

  return (
    <div className='quiz-page feedback'>
      <div className='text'>
        <h2 className={`${quizResult} el-anim`}>{ feedbackContent?.message?.title }</h2>
        <p className="el-anim" dangerouslySetInnerHTML={{__html: feedbackContent?.message?.text}}/>
      </div>
      <div className='-button el-anim'>
        <Button text={feedback.button.text || null} onClick={onClick} />
      </div>
    </div>
  )
}

export default Feedback