import React from "react";
import { useGlobalContext } from "./AppProvider";

const Modal = () => {
  const { isModalOpen, quiz, correct, playAgain } = useGlobalContext();
  return (
    <section>
      <article
        className={isModalOpen ? "modal-container show" : "modal-container"}
      >
        <h2 className="text-center ">congrats!</h2>
        <p className="text-center congrats">
          You scored {((correct / quiz.length) * 100).toFixed(0)} % of questions
          correct
        </p>
        <button className="play-btn" onClick={() => playAgain()}>
          Play Again
        </button>
      </article>
    </section>
  );
};

export default Modal;
