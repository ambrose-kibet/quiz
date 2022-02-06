import Navbar from "./Navbar";
import { useGlobalContext } from "./AppProvider";
import QuizSetup from "./QuizSetup";
import Modal from "./Modal";
import Article from "./Article";
function App() {
  const { isWaiting, isLoading } = useGlobalContext();
  if (isWaiting) {
    return (
      <>
        <Navbar />
        <QuizSetup />
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <Navbar />
        <h2 className="text-center loading">Loading...</h2>
      </>
    );
  }
  return (
    <main>
      <Navbar />
      <Modal />
      <Article />
    </main>
  );
}

export default App;
