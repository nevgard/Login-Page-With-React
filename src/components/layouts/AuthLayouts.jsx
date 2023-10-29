const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center  items-center min-h-screen">
      <div className="p-6 shadow-md rounded-md">
        <div className="form-title">
          <h1 className="text-blue-500 font-bold text-2xl">{title}</h1>
        </div>
        <div className="sub-title mt-2">
          <h1 className="font-normal text-md">
            Welcome, Please enter your details
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
