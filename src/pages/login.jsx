import FormLogin from "../components/fragments/FormLogin";
import AuthLayout from "../components/layouts/AuthLayouts";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="mt-2 text-center text-sm">
        Dont have an account ? {""}
        <Link to="/register" className="font-bold hover:text-blue-800">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};
export default LoginPage;
