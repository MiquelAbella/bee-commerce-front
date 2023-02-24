export const Button = ({
  text,
  size = "md",
  color = "primary",
  outline = false,
  disabled = false,
  onClick,
}) => {
  const sizes = {
    md: "text-xs lg:text-sm px-5 py-2",
    sm: "text-xs lg:text-sm px-4 py-1",
  };

  const buttonColors = {
    primary: {
      fill: "bg-sky-500/90 text-gray-50 enabled:hover:bg-sky-500",
      outline:
        "border border-sky-500/90 bg-white text-gray-800 enabled:hover:bg-sky-500/50",
    },
    secondary: {
      fill: "bg-green-500/90 text-gray-50 enabled:hover:bg-green-500",
      outline:
        "border border-green-500/90 bg-white text-gray-800 enabled:hover:bg-green-500/50",
    },
    danger: {
      fill: "bg-red-500/90 text-gray-50 enabled:hover:bg-red-500",
      outline:
        "border border-red-500/90 bg-white text-gray-800 enabled:hover:bg-red-500/50",
    },
  };

  const type = outline ? "outline" : "fill";
  const disabledClass = disabled ? "opacity-50" : "";

  let finalClassName = `centered rounded-md flex inline-flex justify-center items-center transition ${sizes[size]} ${buttonColors[color][type]} ${disabledClass} hover:${buttonColors[color][type]}/80`;

  return (
    <button disabled={disabled} onClick={onClick} className={finalClassName}>
      {text}
    </button>
  );
};
