const emailtest = (value) => {
  const emailPattern = /^(\w)+([-_\.])*(\w)*@(\w)+\.([a-zA-Z]){2,10}$/g;
  return emailPattern.test(value);
};

export default {
  emailtest,
};
