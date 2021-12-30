import { getAuth, signOut } from "firebase/auth";

import { toast } from "react-toastify";

const logout = () => {
  const auth = getAuth();
  signOut(auth);
  toast.warning("Вы вышли из аккаунта");
};

export default logout;
