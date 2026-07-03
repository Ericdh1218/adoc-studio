import Label from "./Label";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

function Input({
  id,
  label,
  type = "text",
  placeholder = "",
  helperText,
  error,
  required = false,
  disabled = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </Label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="
          border-0 border-b border-muted bg-transparent px-0 py-4
          font-body text-lg text-primary outline-none
          transition-colors duration-300
          placeholder:text-text-secondary/70
          focus:border-secondary
          disabled:cursor-not-allowed disabled:opacity-50
        "
      />

      {helperText && !error && (
        <p className="text-sm text-text-secondary">{helperText}</p>
      )}

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default Input;