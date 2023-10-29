import Button from "../elements/buttons/Button";
import InputForm from "../elements/inputs";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Insert your name here ..."
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmPassword"
      />
      <Button text="Register" width="w-full text-white" />
    </form>
  );
};
export default FormRegister;
