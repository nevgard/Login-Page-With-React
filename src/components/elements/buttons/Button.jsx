const Button = (props) => {
  const { text, width, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`p-1 rounded-sm bg-blue-500 ${width}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
