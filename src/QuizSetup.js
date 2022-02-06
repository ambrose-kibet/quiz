import React from "react";
import { useGlobalContext } from "./AppProvider";

const QuizSetup = () => {
  const {
    isError,
    quantity,
    category,
    difficulty,
    handleChange,
    handleSubmit,
  } = useGlobalContext();
  return (
    <section className="section-container">
      <article className="form-container">
        <h2 className="form-title">Setup Quiz</h2>
        <form className="form">
          <label htmlFor="quantity" className="label">
            Number of questions
          </label>
          <input
            type="number"
            className="quantity"
            name="quantity"
            max={50}
            min={0}
            value={quantity}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="category" className="label">
            Category
          </label>
          <select
            className="category"
            name="category"
            value={category}
            onChange={(e) => handleChange(e)}
          >
            <option className="option" value="sports">
              sports
            </option>
            <option className="option" value="history">
              history
            </option>
            <option className="option" value="politics">
              politics
            </option>
            <option className="option" value="General Knowledge">
              General Knowledge
            </option>
            <option className="option" value="Animals">
              Animals
            </option>
            <option className="option" value="Entertainment: Video Games">
              Entertainment: Video Games
            </option>
          </select>
          <label htmlFor="category" className="label">
            Difficulty
          </label>
          <select
            className="category"
            name="difficulty"
            value={difficulty}
            onChange={(e) => handleChange(e)}
          >
            <option className="option" value="easy">
              easy
            </option>
            <option className="option" value="medium">
              medium
            </option>
            <option className="option" value="hard">
              hard
            </option>
          </select>
          <button
            type="submit"
            className="submit-btn"
            onClick={(e) => handleSubmit(e)}
          >
            Start
          </button>
        </form>
        {isError && (
          <p className="test-danger">
            No items for these options please try other options!
          </p>
        )}
      </article>
    </section>
  );
};

export default QuizSetup;
