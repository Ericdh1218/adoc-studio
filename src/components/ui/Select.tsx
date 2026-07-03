import Label from "./Label";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

function Select({
  id,
  label,
  options,
  placeholder = "Selecciona una opción",
  helperText,
  error,
  required = false,
  disabled = false,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </Label>

      <select
        id={id}
        required={required}
        disabled={disabled}
        defaultValue=""
        className="
          border-0 border-b border-muted bg-transparent px-0 py-4
          font-body text-lg text-primary outline-none
          transition-colors duration-300
          focus:border-secondary
          disabled:cursor-not-allowed disabled:opacity-50
        "
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {helperText && !error && (
        <p className="text-sm text-text-secondary">{helperText}</p>
      )}

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default Select;