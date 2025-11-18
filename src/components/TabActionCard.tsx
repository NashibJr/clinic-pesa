import React from "react";

interface TabActionCardProps {
  label: string;
  icon?: React.JSX.Element;
}

const TabActionCard: React.FC<TabActionCardProps> = ({ label, icon }) => {
  return (
    <div className="card p-4 rounded-xl bg-white flex flex-col items-center justify-center text-center">
      {icon}
      <p className="text-gray-500 text-sm sm:text-base">{label}</p>
    </div>
  );
};

export default TabActionCard;
