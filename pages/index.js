import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "config/firebase";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { USER_LOGIN } from "redux/reducers/authReducer";
import store from "redux/store";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log({ idTokenResult });
        dispatch({
          type: USER_LOGIN,
          payload: {
            name: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });

    // return () => {
    //   unsubscribe();
    // };
  }, []);
  return <center>Start Page</center>;
};
export default Home;
