import s from "./Feedback.module.css";

const Feedback = ({ feedback, total, positive }) => {
  return (
    <ul className={s.feedbackList}>
      <li> Good: {s.good}</li>
      <li> Neutral: {s.neutral}</li>
      <li> Bad: {s.bad}</li>
      <li> TotaL: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
