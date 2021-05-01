import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem("login"));
    const userStatus = JSON.parse(localStorage.getItem("user"));
    console.log("the login status is", loginStatus);
    console.log("the user status is", userStatus);
    loginStatus?.isUserLoggedIn && setLogin(true);
  }, []);

  async function loginUserWithCredentials(username, password) {
    try {
      const {
        data: { allUsers }
      } = await axios.get("https://Ecommerce-Backend-6.prratim.repl.co/users");
      const user = allUsers.filter((item) => item.name === username);
      console.log("the user is", user);

      const userName = user[0].name;
      const userPass = user[0].password;
      console.log("id is man", user[0]._id);
      if (userName === username && userPass === password) {
        setLogin(true);
        navigate("/products");
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: true }));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error occured", error);
    }
  }
  function signOutHandler() {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    setLogin(false);
    navigate("/");
  }
  const [inputText, setInputText] = useState("");
  const [inputPass, setInputPass] = useState("");
  return (
    <>
      <AuthContext.Provider
        value={{
          login,
          loginUserWithCredentials,
          inputPass,
          setInputPass,
          inputText,
          setInputText,
          signOutHandler
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
