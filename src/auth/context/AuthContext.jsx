import { createContext, useReducer, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        id: action.payload.id,
        data: action.payload.data,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        id: null,
        data: null,
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
      data:null,
      isAuthenticated: false,
    });

  //on re render checks for token
  useEffect(() => {
    const token = localStorage.getItem("token");

    async function fetchData(id) {
      const response = await axios.get(`https://erp-system-backend.onrender.com/api/v1/student/1/fetch/${id}`)
      return response.data.data;
    }

    if (token) {
      try {
        const data = jwtDecode(token);
        console.log("Decoded token data:", data);
        if (data.id) {
          fetchData(data.id).then((studentData) => {
            console.log(studentData);
            dispatch({ type: "login", payload: { id: data.id, data: studentData } });
            console.log("final state is", state);
          });
          // console.log("Dispatched LOGIN action with payload:", data.id, studentData);
        }
      }
      catch (error) {
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

      const response = await axios.get(`https://erp-system-backend.onrender.com/api/v1/student/1/fetch/${id}`)
      console.log(response.data.data);
      const studentData = response.data.data;

      dispatch({ type: "login", payload: { id: id, data: studentData } });
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
        data:state.data,
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