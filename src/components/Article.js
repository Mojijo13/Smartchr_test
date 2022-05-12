import './Article.css'
import React from 'react'
import anime from "animejs/lib/anime.es.js";
import Highlight from './Highlight'
import Strikeout from './Strikeout'
import { QUIZ_STEP } from '../variable'

const Article = ({ article, setQuizStep, isAnimTitle, animStrikeoutState, animHighlightState }) => {
  const { title, title_correct, subtitle, content } = article
  const { src, alt } = article.image

  const [isAnimStrikeout, setIsAnimStrikeout] = animStrikeoutState
  const [isAnimHighlight, setIsAnimHighlight] = animHighlightState

  const animation = React.useRef(null);

  React.useEffect(() => {
    if(!isAnimTitle) {
      animation.current = anime({
        targets: '.article-container .el-anim',
        translateY: [-20, 0],
        opacity: 1,
        duration: 400,
        delay: anime.stagger(100)
      });
    }
  }, [isAnimTitle])

  React.useEffect(() => {
    if (isAnimTitle) {
      document.getElementById('article-container')?.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      setIsAnimStrikeout(true)
    }

  }, [ isAnimTitle, setIsAnimStrikeout])
  React.useEffect(() => {
    if (isAnimStrikeout) {
      setTimeout(() => {
        setIsAnimHighlight(true)
      }, 1000)
    }
  }, [ isAnimStrikeout, setIsAnimHighlight])
  React.useEffect(() => {
    if (isAnimHighlight) {
      setTimeout(() => {
        setQuizStep(QUIZ_STEP.remember)
      }, 1000)
    }
  }, [ isAnimHighlight, setQuizStep])

  return (
    <div id='article-container' className='article-container'>
      <div className='article'>
        <div>
            { isAnimHighlight &&
              <>
                <Highlight className='anim-svg' />
                <div className='title-h1 mt-4 mb-3 animate__animated animate__fadeIn'>
                  { title_correct }
                </div>
              </>
            }
            { (!isAnimHighlight) &&
              <div className='title-h1 mt-4 mb-3 el-anim'>
                { title }
              </div>
            }
            { (!isAnimHighlight && isAnimStrikeout) &&
              <Strikeout className='anim-svg  el-anim-title' />
            }
          <div className='title-h3 mb-2 el-anim'>{ subtitle }</div>
          <div className='image el-anim'>
            <img src={src} alt={alt} />
          </div>
        </div>
        <div className='article__content mt-3 el-anim' dangerouslySetInnerHTML={{__html: content}} />
      </div>
    </div>
  )
}

export default Article