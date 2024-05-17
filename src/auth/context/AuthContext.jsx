import { createContext, useReducer, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        id: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        id: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer,
    {
      id: null,
      isAuthenticated: false,
    });

  //on re render checks for token
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
        try{
            const data = jwtDecode(token);
            console.log("Decoded token data:", data);
            if (data.id) {
                dispatch({ type:"login", payload: data.id });
              console.log("Dispatched LOGIN action with payload:", data.id);
              console.log("final state is", state);
            }
        }
        catch ( error ) {
            console.error("Error decoding token:", error);
        }
    }
  }, []);

  const login = async (credentials) => {
    // Implement login logic (e.g., API call)

    //axios implementation
    const response = await axios.post(
      `https://erp-system-backend.onrender.com/api/v1/student/1/login`,
      credentials
    );
    const data = response.data;
    // console.log(data);

    if (data.token) {
      localStorage.setItem("token", data.token);
      const { id } = jwtDecode(data.token);
      dispatch({ type: "login", payload: id });
    }

    return { message: data.message, success: data.success };
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        id: state.id,
        isAuthenticated: state.isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
