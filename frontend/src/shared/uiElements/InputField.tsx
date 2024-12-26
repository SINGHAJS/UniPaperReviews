export type InputFieldProps = {
  name: string;
  value: string;
  placeholder: string;
  style: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  placeholder,
  style,
  onChange,
}) => (
  <input
    className={style}
    type="text"
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
