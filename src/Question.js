import React, { useState } from 'react';

export const Question = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(1);


  return (
    <>
      {questions.map(question => <p>{question[1]}</p>)}
      {console.log('Questions inside Question component', questions)}
    </>
  )
}