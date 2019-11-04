import React, { useState, useEffect } from "react";


export const Questions = () => {
  const [hasError, setErrors] = useState();
  const [questions, setQuestions] = useState();


  async function fetchData() {
    const data = await fetch("https://opentdb.com/api.php?amount=15&category=9&type=multiple&encode=url3986");
    data
      .json()
      .then(data => setQuestions(data.results))
      .catch(error => setErrors(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {console.log('Questions after sorting', questions)}
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );


} // outermost Questions component
export default Questions;