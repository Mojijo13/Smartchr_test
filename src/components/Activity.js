import "./Activity.css"
import React from 'react'
import Article from './Article'
import Quiz from './Quiz'
import courseData from "../data/course-data"
import { QUIZ_STEP, QUIZ_RESULT } from '../variable'

const Activity = () => {

  const [courseId, setCourseId] = React.useState(0)
  const [ quizStep, setQuizStep ] = React.useState(QUIZ_STEP.question)
  const [ quizResult, setQuizResult ] = React.useState(QUIZ_RESULT.true)
  const [isAnimTitle, setIsAnimTitle] = React.useState(false)
  const [isAnimStrikeout, setIsAnimStrikeout] = React.useState(false)
  const [isAnimHighlight, setIsAnimHighlight] = React.useState(false)

  const currentCourse = React.useMemo(() => {
    return Object.keys(courseData).map(k => courseData[k])[courseId]
  }, [courseId])

  const onClickNextActivity = () => {
    if(courseId === Object.keys(courseData).length - 1) {
      reset()
    } else {
      setCourseId(courseId + 1)
    }
  }

  const reset = () => {
    setCourseId(0)
    setQuizStep(QUIZ_STEP.question)
    setQuizResult(QUIZ_RESULT.true)
    setIsAnimTitle(false)
    setIsAnimStrikeout(false)
    setIsAnimHighlight(false)
  }

  return (
    <div className="activity">
      <Article
        article={ currentCourse.article || null }
        setQuizStep={ setQuizStep }
        isAnimTitle={ isAnimTitle }
        courseId={courseId}
        animStrikeoutState={[isAnimStrikeout, setIsAnimStrikeout]}
        animHighlightState={[isAnimHighlight, setIsAnimHighlight]}
      />
      <Quiz
        quiz={ currentCourse.quiz || null }
        quizStepState={[ quizStep, setQuizStep ]}
        quizResultState={[ quizResult, setQuizResult ]}
        setIsAnimTitle={setIsAnimTitle}
        onClickNextActivity={onClickNextActivity}
      />
    </div>
  )
}

export default Activity