import Button from "../elements/buttons/Button";
import InputForm from "../elements/inputs";
const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="password"
        type="password"
        placeholder="********"
        name="password"
      />
      <Button text="Login" width="w-full text-white" type="submit" />
    </form>
  );
};
export default FormLogin;
