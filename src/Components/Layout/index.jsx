import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import Swal from "sweetalert2";

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

  const [isLogin, setIsLogin] = useState(true);

  const handleChangeLoginFormData = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleChangeRegisterFormData = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = async (e) => {
    const { email, password } = loginFormData;
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3000/users?email=${email}&password=${password}`
    );
    const user = await res.json();
    if (user.length) {
      loginUser(user[0]);
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
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        email,
        password: password1,
        fullname,
        history: [],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      loginUser(registerFormData);
      Swal.fire({
        title: "Successfuly registered",
        icon: "success",
        confirmButtonText: "Proceed",
      });
      setIsLoginModalOpen(false);
    } else {
      console.log("Something happened");
    }
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
            <LoginModal
              loginFormData={loginFormData}
              handleChangeLoginFormData={handleChangeLoginFormData}
              handleSubmitLogin={handleSubmitLogin}
              setIsLogin={setIsLogin}
              isLogin={isLogin}
            />
          ) : (
            <RegisterModal
              registerFormData={registerFormData}
              handleChangeRegisterFormData={handleChangeRegisterFormData}
              handleSubmitRegister={handleSubmitRegister}
              setIsLogin={setIsLogin}
              isLogin={isLogin}
            />
          )}
        </Modal>
      )}
    </div>
  );
};
