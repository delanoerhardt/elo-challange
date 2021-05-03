function validatePassword(password) {
  if (password.length < 8) return false;

  let re = /[a-zA-Z]+/;
  if (!re.test(password)) return false;

  re = /[0-9]+/;
  if (!re.test(password)) return false;

  re = /[!@#$%¨&*()-='[\]~,.;/_+`{}^<>:?]+/;
  if (!re.test(password)) return false;

  re = /^[a-zA-Z0-9!@#$%¨&*()-='[\]~,.;/_+`{}^<>:?]+$/;
  const result = password.match(re);
  if (result === null) return false;

  return true;
}

function validateRegisterForm(formState) {
  let invalidFieldIds = [];

  if (formState.username === "") {
    invalidFieldIds.push("username");
  }

  let passwordValid = true;

  if (!validatePassword(formState.password)) {
    invalidFieldIds.push("password");
    passwordValid = false;
  }

  if (
    !passwordValid ||
    formState.confirmPassword === "" ||
    formState.password !== formState.confirmPassword
  ) {
    invalidFieldIds.push("confirmPassword");
  }

  return {
    valid: invalidFieldIds.length === 0,
    invalidFieldIds: invalidFieldIds,
  };
}

module.exports.validateRegisterForm = validateRegisterForm;
