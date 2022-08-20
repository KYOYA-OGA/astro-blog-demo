interface Props {
  name: string;
  placeholder?: string;
  label: string;
  textarea?: boolean;
  required?: boolean;
  className?: string;
}

export default function FormInput({
  name,
  label,
  placeholder,
  textarea,
  required,
  className,
}: Props) {
  const formStyles = `bg-transparent rounded border-2 dark:border-dark-subtle border-light-subtle w-full text-lg outline-none dark:focus:border-white focus:border-primary p-1 dark:text-white peer ${className}`;
  return (
    <div className="flex flex-col-reverse">
      {textarea ? (
        <textarea
          name={name}
          id={label}
          className={formStyles}
          placeholder={placeholder}
          required={required}
        ></textarea>
      ) : (
        <input
          id={name}
          name={name}
          className={formStyles}
          placeholder={placeholder}
          required={required}
        />
      )}
      <label
        htmlFor={name}
        className="font-semibold dark:text-dark-subtle text-light-subtle dark:peer-focus:text-white peer-focus:text-primary transition-colors self-start"
      >
        {label}
      </label>
    </div>
  );
}
