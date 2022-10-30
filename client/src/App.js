import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { Requests } from "./utils/Index";
import { login } from "./store/actions";
import LandingPage from "./pages/home";
import Login from "./pages/auth/login";
import NavBar from "./components/NavBar/NavBar";
import Register from "./pages/auth/register";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

function App(props) {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("userinfo");
    if (token) {
      setisLoading(true);
      Requests.getUserByToken(token)
        .then((res) => {
          props.login(res);
          setisLoading(false);
        })
        .catch((error) => {
          toast.error(error);
          setisLoading(false);
        });
    } else {
    }
  }, []);
  return (
    <>
      {!isLoading ? (
        <div className="bg-gray-900 min-h-screen text-white">
          <NavBar />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            draggable
            pauseOnHover
            theme="dark"
          />
          <Routes>
            {props.isAuthenticated ? (
              <>
                <Route path="/loggedin" element={<Login />} />
              </>
            ) : (
              <>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
              </>
            )}
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      ) : (
        <Loader />
      )}
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userData) => dispatch(login(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
