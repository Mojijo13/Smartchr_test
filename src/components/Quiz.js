import './Quiz.css'
import React from 'react'
import Question from './Question'
import Feedback from './Feedback'
import Remember from './Remember'
import ResultTransition from './ResultTransition'
import { QUIZ_STEP, QUIZ_RESULT } from '../variable'

const Quiz = ({ quiz, quizStepState, quizResultState, setIsAnimTitle, onClickNextActivity }) => {
  const {
    id,
    question,
    instruction,
    items,
    feedback,
    remember
  } = quiz

  const [ quizStep, setQuizStep ] = quizStepState
  const [ quizResult, setQuizResult ] = quizResultState
  const [ isAnimate, setIsAnimate ] = React.useState(false)
  
  const feedbackContent = React.useMemo(() => {
    return feedback[quizResult]
  }, [feedback, quizResult])

  React.useEffect(() => {
    if (isAnimate) {
      setTimeout(() => {
        setQuizStep(QUIZ_STEP.feedback)
        setIsAnimate(false)
      }, 2000)
    }
  }, [setQuizStep, isAnimate])

  const onClickAnswer = (e, isCorrect) => {
    setQuizResult(QUIZ_RESULT[""+isCorrect])
    setIsAnimate(true)
  }
  const onClickMore = () => {
    setIsAnimTitle(true)
  }
  const onClickAgain = () => {
    onClickNextActivity()
  }

  return (
    <div className='quiz-container'>
      <div className='quiz'>

        { (quizStep === QUIZ_STEP.question && !isAnimate) &&
          <Question
            id={id}
            question={question}
            instruction={instruction}
            items={items}
            onClick={onClickAnswer}
          />
        }

        { (quizStep === QUIZ_STEP.question && isAnimate) &&
          <ResultTransition
            feedbackContent={feedbackContent}
            quizResult={quizResult}
          />
        }

        { (quizStep === QUIZ_STEP.feedback && !isAnimate) &&
          <Feedback
            feedback={feedback}
            feedbackContent={feedbackContent}
            quizResult={quizResult}
            onClick={onClickMore}
          />
        }

        { (quizStep === QUIZ_STEP.remember && !isAnimate) &&
          <Remember
            remember={remember}
            onClick={onClickAgain}
          />
        }

      </div>
    </div>
  )
}

export default Quiz