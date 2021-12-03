import { signInWithEmailLink } from "@firebase/auth";

export const confirm = async () => {
  signInWithEmailLink(auth, email).then((res) => {
      
    window.localStorage.removeItem("emailForRegister");
  });
};
