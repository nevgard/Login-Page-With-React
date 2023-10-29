import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayouts";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="mt-2 text-center text-sm">
        Already have an account ? {""}
        <Link to="/login" className="font-bold hover:text-blue-800">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};
export default RegisterPage;
