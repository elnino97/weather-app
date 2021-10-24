import Suggestion from "./Suggestion";

import classes from "./Input.module.css";
import { ReactComponent as SearchIcon } from "../Assets/search.svg";

const Input = (props) => {
  const handleSuggestionClick = (name) => {
    props.handleAutoComplete(name);
  };

  const suggestions = props.suggestions.map((i, key) => (
    <Suggestion
      handleClick={handleSuggestionClick}
      code={i.code}
      name={i.name}
      key={key}
    />
  ));

  return (
    <div className={classes.input__wrapper}>
      <form>
        <input
          className={`${classes.searchBar} ${
            props.suggestions.length && props.currentInput
              ? classes["searchBar-suggested"]
              : classes["searchBar-nonactive"]
          }`}
          type="text"
          value={props.currentInput}
          onChange={props.handleInput}
          placeholder="Enter a location"
        />
        <button className={classes.search__button} onClick={props.handleSearch}>
          <SearchIcon />
        </button>
      </form>
      {props.suggestions.length && props.currentInput ? (
        <div className={classes.input__suggestions}>{suggestions}</div>
      ) : null}
    </div>
  );
};

export default Input;
