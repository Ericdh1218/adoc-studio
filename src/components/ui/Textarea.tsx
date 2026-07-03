import Label from "./Label";

type TextareaProps = {
  id: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
};

function Textarea({
  id,
  label,
  placeholder = "",
  helperText,
  error,
  rows = 5,
  required = false,
  disabled = false,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </Label>

      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="
          resize-none border-0 border-b border-muted bg-transparent px-0 py-4
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

export default Textarea;