const Button = ({ label, onClick, styledClasses }) => {
  return (
    <button
      onClick={onClick}
      className={`border border-cyan-500 text-cyan-500 py-1.5 px-4 rounded hover:bg-cyan-50 ${styledClasses}`}
    >
      {label}
    </button>
  );
};

export default Button;
