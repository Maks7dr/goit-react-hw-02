import css from "./Options.module.css";

function Options({ onLeaveFeedback, onReset, feedback, totalFeedback }) {
  return (
    <div className={css.wrapper}>
      {Object.keys(feedback).map((key) => (
        <button
          className={css.btn}
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
