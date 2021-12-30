import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "config/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGIN } from "redux/reducers/authReducer";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  return (
    <center>
      Start Page<div></div>
    </center>
  );
};
export default Home;
