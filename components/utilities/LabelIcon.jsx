import React from 'react';

function LabelIcon({ text, icon, ...props }) {
  const Icon = icon;
  return (
    <button
      type="button"
      {...props}
      className="flex gap-2 items-center  hover:bg-white hover:text-violet-900 p-3"
    >
      <span>{text}</span>
      {icon ? <Icon /> : null}
    </button>
  );
}

export default LabelIcon;
