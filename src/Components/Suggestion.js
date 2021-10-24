import classes from "./Suggestion.module.css";

const Suggestion = (props) => {
  return (
    <div
      className={classes.suggestion}
      onClick={() => props.handleClick(props.code)}
    >
      {props.name}
    </div>
  );
};

export default Suggestion;
