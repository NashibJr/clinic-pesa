import React from "react";
import { BsEnvelope } from "react-icons/bs";

interface NoDataProps {
  tabTitle: string;
}

const NoData: React.FC<NoDataProps> = ({ tabTitle }) => {
  return (
    <div className="min-h-[200px] flex flex-col items-center justify-center text-center text-gray-400">
      <BsEnvelope size={25} />
      <p>No data for {tabTitle}</p>
    </div>
  );
};

export default NoData;
