import React, { useEffect } from "react";
import "./Input.css";
import { useReducer } from "react";
import inputValidator from "../../../validators/validator";
const changeState = (state, action) => {
  if (action.type === "CHANGEINPUT") {
    return {
      ...state,
      value: action.value,
      isValid: inputValidator(action.value, action.validations),
    };
  } else {
    return state;
  }
};
function Input(props) {
  const [mainInput, dispatch] = useReducer(changeState, {
    value: "",
    isValid: false,
  });
  const { value, isValid } = mainInput;
  const { id,onInputHandler } = props;
  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);
  const onChangeHanler = (event) => {
    const inputValue = event.target.value;
    dispatch({
      type: "CHANGEINPUT",
      value: inputValue,
      //   isValid: true,
      validations: props.validations,
    });
  };
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.isValid ? "success" : "error"
        }`}
        onChange={onChangeHanler}
        value={mainInput.value}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={props.className}
        onChange={onChangeHanler}
      ></textarea>
    );
  return <div>{element}</div>;
}

export default Input;
