import React, { useState, useEffect } from 'react';
import { Question } from './Question'


export const Questions = () => {
  const [hasError, setErrors] = useState('');
  const [questions, setQuestions] = useState();

  async function fetchData() {
    const data = await fetch("https://opentdb.com/api.php?amount=15&category=9&type=multiple&encode=url3986");
    data
      .json()
      .then(data => setQuestions(data.results))
      .catch(error => setErrors(error))
  };

  const prepareQuestions = () => {
    let
      currentQuestion,
      rightAnswer,
      incorrectAnswer1,
      incorrectAnswer2,
      incorrectAnswer3,
      quizData,
      questionData = [];

    questions.map(quizObject => {
      currentQuestion = decodeURIComponent(quizObject.question);
      rightAnswer = decodeURIComponent(quizObject.correct_answer);
      incorrectAnswer1 = decodeURIComponent(quizObject.incorrect_answers[0]);
      incorrectAnswer2 = decodeURIComponent(quizObject.incorrect_answers[1]);
      incorrectAnswer3 = decodeURIComponent(quizObject.incorrect_answers[2]);
      //put the 4 answers in a random order
      quizData = [
        rightAnswer,
        incorrectAnswer1,
        incorrectAnswer2,
        incorrectAnswer3
      ].sort(function () {
        return 0.5 - Math.random();
      });

      quizData.unshift(rightAnswer, currentQuestion)
      //quizData is in the format[right answer,question,random 4 answers]
      // console.log('QUIZDATA>>>>', quizData)
      questionData = [...questionData, quizData]
    });
    return questionData

  }

  return (
    <div className="question">
      <button onClick={() => fetchData()}>Play Game</button>
      {console.log('Error >>', JSON.stringify(hasError))}
      {questions ? <Question questions={prepareQuestions()} /> : null}

    </div>
  )
}

