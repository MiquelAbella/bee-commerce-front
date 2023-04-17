import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

import { Modal, Button, Footer, NavBar } from "../../Components";

import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";

export const Layout = ({ children }) => {
  const { user, logout, loginUser } = useContext(UserContext);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState({
    fullname: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [isLogin, setIsLogin] = useState(false);

  const handleChangeLoginFormData = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleChangeRegisterFormData = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const url = import.meta.env.VITE_API_BASE_URL;

  const handleSubmitLogin = async (e) => {
    const { email, password } = loginFormData;
    e.preventDefault();
    const res = await fetch(
      `http://bee-commerce-back-production.up.railway.app/loginUser`,
      {
        method: "POST",
        headers: {
          mode: "no-cors",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    const data = await res.json();

    if (data.user) {
      loginUser(data.user);
      Swal.fire({
        title: "Login successfuly",
        icon: "success",
        confirmButtonText: "Proceed",
      });
      setIsLoginModalOpen(false);
    } else {
      Swal.fire({
        title: "Incorrect user or password",
        icon: "error",
        confirmButtonText: "Try again",
      });
    }
  };

  const handleLogout = () => {
    logout();
    Swal.fire({
      title: "Hope to see you soon!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const { fullname, email, password1, password2 } = registerFormData;
    if (
      !fullname.length ||
      !email.length ||
      !password1.length ||
      !password2.length ||
      password1 !== password2
    )
      return;

    const res = await fetch(
      `http://bee-commerce-back-production.up.railway.app/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://bee-commerce-back-production.up.railway.app",
        },
        body: JSON.stringify({
          email: email,
          password: password1,
          fullName: fullname,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          loginUser(data.user);
          Swal.fire({
            title: "Registered successfuly",
            icon: "success",
            confirmButtonText: "Proceed",
          });
        } else {
          Swal.fire({
            title: `Ooops, ${data?.msg}`,
            icon: "error",
            confirmButtonText: "Try again",
          });
        }
        setIsLoginModalOpen(false);
      })
      .catch((error) => console.error(error));
    // const userId = uuidv4();
    // const res = await fetch(`${url}/users`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email,
    //     password: password1,
    //     fullname,
    //     history: [],
    //     registrationDate: Date.now(),
    //     uid: userId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (res.ok) {
    //   console.log(res);
    //   loginUser({
    //     email,
    //     password: password1,
    //     fullname,
    //     history: { flights: [], hotels: [] },
    //     registrationDate: Date.now(),
    //     uid: userId,
    //   });
    //   Swal.fire({
    //     title:
    //       "Successfuly registered, you have just won a 5% discount for 24h",
    //     icon: "success",
    //     confirmButtonText: "Proceed",
    //   });
    //   setIsLoginModalOpen(false);
    // } else {
    //   console.log("Something happened");
    // }
  };

  return (
    <div>
      {children}
      <Footer />
      <NavBar />
      <div
        className={`fixed bottom-5 right-5 z-50 ${
          !user && "animate-bounce"
        } hover:animate-none`}
      >
        {!user ? (
          <Button text="Login" onClick={() => setIsLoginModalOpen(true)} />
        ) : (
          <Button text="Logout" color="danger" onClick={handleLogout} />
        )}
      </div>
      {isLoginModalOpen && (
        <Modal closeModal={() => setIsLoginModalOpen(false)} height="h-auto">
          {!isLogin ? (
            <div className="w-full h-full p-4 md:p-4 flex flex-col items-center justify-center">
              <LoginModal
                loginFormData={loginFormData}
                handleChangeLoginFormData={handleChangeLoginFormData}
                handleSubmitLogin={handleSubmitLogin}
                setIsLogin={setIsLogin}
                isLogin={isLogin}
              />
            </div>
          ) : (
            <div className="w-full h-full p-4 md:p-4 flex flex-col items-center justify-center">
              <RegisterModal
                registerFormData={registerFormData}
                handleChangeRegisterFormData={handleChangeRegisterFormData}
                handleSubmitRegister={handleSubmitRegister}
                setIsLogin={setIsLogin}
                isLogin={isLogin}
              />
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};
