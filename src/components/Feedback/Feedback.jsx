import css from "./Feedback.module.css";

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Neutral: {feedback.neutral}</p>
      <p className={css.text}>Good: {feedback.good}</p>
      <p className={css.text}>Bad: {feedback.bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Possitive: {positiveFeedback}%</p>
    </div>
  );
}

export default Feedback;
