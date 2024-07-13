import s from "./Description.module.css";

const Description = ({ title, text }) => {
  return (
    <div className={s.descriptContainer}>
      <h1 className={s.descriptTitle}>{title}</h1>
      <p className={s.descriptText}>{text}</p>
    </div>
  );
};

export default Description;
