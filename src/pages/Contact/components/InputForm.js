const InputForm = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  formikErrors,
}) => {
  return (
    <>
      <div className="flex flex-col w-full h-full md:gap-y-2">
        <label htmlFor={name} className="ml-1 lg:">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          id={name}
          className={`textAreaShadow px-3 py-2  shadow-[1px_1px_5px_0px_#ababab] bg-white rounded-lg md:py-3 lg:py-3 focus:ring-0 lg:  outline-[#4C6BDC] `}
          onChange={onChange}
          onBlur={onBlur}
        />
        <p className={`mt-1 ml-1  text-red-600 md:`}>{formikErrors}</p>
      </div>
    </>
  );
};

export default InputForm;
