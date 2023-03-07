import React from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Typography } from "../../Typography";

export const LoginModal = ({
  loginFormData,
  handleChangeLoginFormData,
  setIsLogin,
  handleSubmitLogin,
  isLogin
}) => {
  return (
    <>
      <Typography text="Login" type="big" />
      <form
        className="flex flex-col gap-6 md:gap-8 mt-4 w-full md:w-2/3 py-20"
        onSubmit={handleSubmitLogin}
      >
        <Input
          type="email"
          name="email"
          value={loginFormData.email}
          onChange={handleChangeLoginFormData}
          label="email"
          labelText="Email"
          outlined
        />
        <Input
          type="password"
          name="password"
          value={loginFormData.password}
          onChange={handleChangeLoginFormData}
          label="password1"
          labelText="Password"
          outlined
        />
        <Button text="Login" />
      </form>
      <div className="w-full md:w-2/3 mt-4 flex items-end justify-end gap-4">
        <Typography text="Do you have an account?" />
        <Button
          text="Register"
          color="secondary"
          onClick={() => setIsLogin(!isLogin)}
        />
      </div>
    </>
  );
};
