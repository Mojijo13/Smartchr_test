import anime from "animejs/lib/anime.es.js";
import React from 'react'
import Button from './Button'

const Question = ({question, id, instruction, items, onClick}) => {
  const animation = React.useRef(null);

  React.useEffect(() => {
    animation.current = anime({
      targets: '.quiz-page.question .el-anim',
      translateY: [-20, 0],
      opacity: 1,
      duration: 400,
      delay: anime.stagger(100)
    });
  }, [])
  

  return (
    <div className='quiz-page question'>
      <div className='text el-anim'>
        <h2 dangerouslySetInnerHTML={{__html: question}} />
      </div>
      <div className='buttons'>
        <div className='instruction el-anim'>
          <span className='q_number'>{ id }</span>
          { instruction }
        </div>
        { items.map(({text, isCorrect}, id) => (
          <Button
            key={id}
            text={text}
            onClick={(e) => onClick(e, isCorrect)}
            className={"el-anim"}
          />
        ))}
      </div>
    </div>
  )
}

export default Question