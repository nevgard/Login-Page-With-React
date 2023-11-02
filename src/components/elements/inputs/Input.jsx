import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-slate-200 px-3 py-1.5 "
        name={name}
        id={name}
        ref={ref}
      />
    </>
  );
});
export default Input;
