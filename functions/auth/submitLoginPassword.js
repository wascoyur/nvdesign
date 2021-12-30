import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
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
    });
  // console.log({ result });
  return out;
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const res = {
        userName: auth.currentUser.displayName,
        token: credential.idToken,
      };
      // console.log({ res });
      return res;
    })
    .catch((err) => {
      // console.log(err);
      toast.error(err.message);
    });
};

// export const statusAuthChenged = () => {
//   return onAuthStateChanged(auth, async (user) => {
//     if (user) {
//       return { token: await user.getIdTokenResult(), email: user.displayName };
//       // console.log({ idTokenResult });
//     } else return { token: "strt", email: "strt" };
//   });
// };
