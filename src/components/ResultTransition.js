import anime from "animejs/lib/anime.es.js";
import React from 'react'

const ResultTransition = ({quizResult, feedbackContent}) => {
  const animation = React.useRef(null);

  React.useEffect(() => {
    animation.current = anime({
      targets: '.quiz-page--result .el-anim',
      scale: 1,
      opacity: 1,
      duration: 400,
      easing: 'easeOutElastic(1, .6)'
    });
  }, [])

  return (
    <div className={`quiz-page--result --${quizResult}`}>
      <h2 className="el-anim">{feedbackContent?.text}</h2>
    </div>
  )
}

export default ResultTransition