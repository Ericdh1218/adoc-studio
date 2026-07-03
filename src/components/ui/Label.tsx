type LabelProps = {
    children: React.ReactNode;
    htmlFor: string;
};

function Label({ children, htmlFor }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className="mb-2 block text-sm font-medium text-text-secondary"
        >
            {children}
        </label>
    );
}

export default Label;
