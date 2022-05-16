import { useState } from "react";
import AnswersList from "./AnswersList";
import SurveryForm from "./SurveryForm";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);

  function addSurveyToList(answerObj) {
    setAnswersList([...answersList, answerObj]);
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="main__form">
        <SurveryForm addSurveyToList={addSurveyToList} />
      </section>
    </main>
  );
}

export default Main;
