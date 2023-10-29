import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2">
      <h1 className="font-bold text-4xl">Upss..</h1>
      <p className="font-normal text-md text-slate-600">Sorry alamat palsu</p>
    </div>
  );
};

export default ErrorPage;
