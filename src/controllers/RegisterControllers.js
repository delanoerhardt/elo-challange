function RegisterController() {
  this.getChangeHandler = (state) => {
    return (event) => {
      event.preventDefault();
      const newFormState = { ...state };
      newFormState[event.target.id] = event.target.value;

      console.log(event);
    };
  };
}

export default RegisterController;
