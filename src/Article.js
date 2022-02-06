import React from "react";
import { useGlobalContext } from "./AppProvider";

const Article = () => {
  const {
    quiz,
    index,
    correct,
    setCorrect,
    setIndex,
    nextQuestion,
    setisModalOpen,
    isModalOpen,
  } = useGlobalContext();

  const { question, correct_answer, incorrect_answers } = quiz[index];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  const handleCheck = (item) => {
    if (item === correct_answer) {
      setCorrect((oldvalue) => oldvalue + 1);
    }
    let newValue = index;
    newValue += 1;
    if (newValue > quiz.length - 1) {
      newValue = 0;
      setisModalOpen(true);
    }
    return setIndex(newValue);
  };

  return (
    <article className="article-container">
      <h5 className="text-right">
        Correct answers {correct}/{index}
      </h5>
      <h4
        className="question"
        dangerouslySetInnerHTML={{ __html: question }}
      ></h4>
      {!isModalOpen ? (
        <div className="answer-container">
          {answers.map((item, index) => {
            return (
              <button
                key={index}
                className="answer-btn"
                onClick={() => handleCheck(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      ) : null}

      <button className="next-btn" onClick={() => nextQuestion(index)}>
        Skip Question
      </button>
    </article>
  );
};

export default Article;
