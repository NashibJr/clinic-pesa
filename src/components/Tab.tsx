import React from "react";

interface TabProps {
  label: string;
  isActive?: boolean;
  handleClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, handleClick }) => {
  return (
    <li
      className={`${
        isActive ? "text-[#0A4C66]" : "text-gray-400"
      } pb-1 uppercase font-bold cursor-pointer hover:text-[#0A4C66] transition-colors duration-200`}
      onClick={handleClick}
    >
      {label}
      <>
        {isActive && (
          <div className="w-full border-t-4 border-yellow-400 mt-1.5 rounded-t-full" />
        )}
      </>
    </li>
  );
};

export default Tab;
