import React from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Typography } from "../../Typography";

export const RegisterModal = ({
  registerFormData,
  handleChangeRegisterFormData,
  setIsLogin,
  handleSubmitRegister,
  isLogin,
}) => {
  return (
    <>
      <Typography text="Register" type="big" />
      <form
        className="flex flex-col gap-6 md:gap-8 mt-4 w-full md:w-2/3"
        onSubmit={handleSubmitRegister}
      >
        <Input
          type="text"
          name="fullname"
          value={registerFormData.fullname}
          onChange={handleChangeRegisterFormData}
          label="name"
          labelText="Fullname"
          outlined
        />
        <Input
          type="email"
          name="email"
          value={registerFormData.email}
          onChange={handleChangeRegisterFormData}
          label="email"
          labelText="Email"
          outlined
        />
        <Input
          type="password"
          name="password1"
          value={registerFormData.password1}
          onChange={handleChangeRegisterFormData}
          label="password1"
          labelText="Password"
          outlined
        />
        <Input
          type="password"
          name="password2"
          value={registerFormData.password2}
          onChange={handleChangeRegisterFormData}
          label="password2"
          labelText="Repeat pass."
          outlined
        />
        <Button text="Register" />
      </form>
      <div className="w-full md:w-2/3 mt-4 flex items-end justify-end gap-4">
        <Typography text="Already registered?" />
        <Button
          text="Login"
          color="secondary"
          onClick={() => setIsLogin(!isLogin)}
        />
      </div>
    </>
  );
};
