import { useState } from "react";

const initialState = {
  username: "",
  color: "",
  timeSpent: [],
  review: "",
  email: "",
};

export default function SurveryForm({ addSurveyToList }) {
  const [answerObj, setAnswerObj] = useState(initialState);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "color") {
      setAnswerObj({ ...answerObj, color: value });
    }
    if (name === "spend-time") {
      setAnswerObj({
        ...answerObj,
        timeSpent: handleArrayChanges(answerObj.timeSpent, value),
      });
    }
    if (name === "review") {
      setAnswerObj({ ...answerObj, review: value });
    }
    if (name === "username") {
      setAnswerObj({ ...answerObj, username: value });
    }
    if (name === "email") {
      setAnswerObj({ ...answerObj, email: value });
    }
  }

  function handleArrayChanges(array, activityWithDuck) {
    if (array.includes(activityWithDuck)) {
      const index = array.indexOf(activityWithDuck);
      array.splice(index, 1);
      return [...array];
    } else return [...array, activityWithDuck];
  }

  function handleSubmit(e) {
    e.preventDefault();
    addSurveyToList(answerObj);

    setAnswerObj(initialState);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>

      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>

        <ul>
          <li>
            <input
              id="color-one"
              type="radio"
              name="color"
              value="1"
              checked={answerObj.color === "1"}
              onChange={handleChange}
            />
            <label htmlFor="color-one">1</label>
          </li>
          <li>
            <input
              id="color-two"
              type="radio"
              name="color"
              value="2"
              checked={answerObj.color === "2"}
              onChange={handleChange}
            />
            <label htmlFor="color-two">2</label>
          </li>
          <li>
            <input
              id="color-three"
              type="radio"
              name="color"
              value="3"
              checked={answerObj.color === "3"}
              onChange={handleChange}
            />
            <label htmlFor="color-three">3</label>
          </li>
          <li>
            <input
              id="color-four"
              type="radio"
              name="color"
              value="4"
              checked={answerObj.color === "4"}
              onChange={handleChange}
            />
            <label htmlFor="color-four">4</label>
          </li>
        </ul>
      </div>

      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="swimming"
                checked={answerObj.timeSpent.includes("swimming")}
                onChange={handleChange}
              />
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="bathing"
                checked={answerObj.timeSpent.includes("bathing")}
                onChange={handleChange}
              />
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="chatting"
                checked={answerObj.timeSpent.includes("chatting")}
                onChange={handleChange}
              />
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="noTime"
                checked={answerObj.timeSpent.includes("noTime")}
                onChange={handleChange}
              />
              I don't like to spend time with it
            </label>
          </li>
        </ul>
      </div>

      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </label>

      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={answerObj.username}
          onChange={handleChange}
        />
      </label>

      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={answerObj.email}
          onChange={handleChange}
        />
      </label>

      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
