const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-slate-200 px-2 "
        name={name}
        id={name}
      />
    </>
  );
};
export default Input;
