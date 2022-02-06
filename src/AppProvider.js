import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
const getTheme = () => {
  let newtheme = "light-theme";
  if (localStorage.getItem("theme")) {
    newtheme = localStorage.getItem("theme");
  }
  return newtheme;
};
const categories = {
  sports: 21,
  history: 23,
  politics: 24,
  "General Knowledge": 9,
  "Entertainment: Video Games": 15,
  Animals: 27,
};
const url = "https://opentdb.com/api.php?";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());
  const [isWaiting, setisWaiting] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [isError, setisError] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [item, setItem] = useState({
    quantity: 10,
    category: "sports",
    difficulty: "easy",
  });

  const handleToggle = (theme) => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  const getQuestions = async (url) => {
    setisLoading(true);
    setisWaiting(false);
    const response = await axios.get(url).catch((err) => console.log(err));
    const data = response.data.results;
    console.log(data.length);
    if (data.length === 0) {
      setisLoading(false);
      setisWaiting(true);
      setisError(true);
    } else {
      setQuiz(data);
      setCorrect(0);
      setisLoading(false);
    }
  };

  const nextQuestion = (value) => {
    let newValue = value;
    newValue += 1;
    if (newValue > quiz.length - 1) {
      newValue = 0;
      setisModalOpen(true);
    }
    return setIndex(newValue);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setItem({ ...item, [name]: value });
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList = theme;
  }, [theme]);

  const playAgain = () => {
    setisWaiting(true);
    setisModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { quantity, category, difficulty } = item;
    let newQuantity = parseInt(quantity);
    // https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
    const params = `amount=${newQuantity}&category=${categories[category]}&difficulty=${difficulty}&type=multiple`;
    getQuestions(`${url}${params}`);
  };
  return (
    <AppContext.Provider
      value={{
        theme,
        handleToggle,
        isWaiting,
        isError,
        quiz,
        index,
        isLoading,
        correct,
        setCorrect,
        setIndex,
        nextQuestion,
        isModalOpen,
        handleChange,
        setisModalOpen,
        playAgain,
        handleSubmit,
        ...item,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
