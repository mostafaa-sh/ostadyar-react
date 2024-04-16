import rules from "./rules";
import regex from "./regex";
const inputValidator = (value, validation) => {
  let validate = [];
  for (let i of validation) {
    switch (i.value) {
      case rules.requiredValue: {
        if (value.trim()) {
          validate.push(true);
        } else {
          validate.push(false);
        }
        break;
      }
      case rules.minValue: {
        if (value.length < i.min) {
          validate.push(false);
        } else {
          validate.push(true);
        }
        break;
      }
      case rules.maxValue: {
        if (value.length > i.max) {
          validate.push(false);
        } else {
          validate.push(true);
        }
        break;
      }
      case rules.emailValue: {
       if(!regex.emailtest(value)){
        validate.push(false);
       }else{
        validate.push(true);
       }
        break;
      }
      default: {
        return true;
        break;
      }
    }
  }
  const dataValidation = validate.some((item) => item === false);
  return dataValidation ? false : true;
};
export default inputValidator;
