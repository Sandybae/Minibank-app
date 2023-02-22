const LabelIcon = ({ text, icon, ...props }) => {
  const Icon = icon;
  return (
    <button
      {...props}
      className="flex gap-2 items-center  hover:bg-white hover:text-blue-500"
    >
      <span>{text}</span>
      {icon ? <Icon /> : null}
    </button>
  );
};

export default LabelIcon;
