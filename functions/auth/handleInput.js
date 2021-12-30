const handleInput = (e) => {
  debugger;
  console.log({ e });
  switch (e.target.name) {
    case "login":
      return e.target.value;
    case "password":
      return e.target.value;

    default:
      break;
  }
};
export default handleInput;
