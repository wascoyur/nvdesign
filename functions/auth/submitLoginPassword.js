import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase";
import { toast } from "react-toastify";

export const submitLoginPassword = async (email, password) => {
  const out = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .then((user) => {
      const result = user.getIdTokenResult();
      return result;
    })
    .catch((error) => {
      toast.error("Неверный логин/пароль");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  // console.log({ result });
  return out;
};
