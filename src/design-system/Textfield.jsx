const Textfield = ({ label, value, styleClasses, onChange, onKeyDown }) => {
  return (
    <label
      htmlFor={label}
      className={`${styleClasses} relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600`}
    >
      <input
        type="text"
        className="text-black w-full p-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        placeholder={label}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        {label}
      </span>
    </label>
  );
};

export default Textfield;
