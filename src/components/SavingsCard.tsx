import { AiOutlineEyeInvisible } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";

interface SavingsCardProps {
  label: string;
  amount: number | string;
  color?: string;
  name: string;
}

const SavingsCard: React.FC<SavingsCardProps> = ({
  amount,
  label,
  color = "bg-blue-100",
  name,
}) => {
  return (
    <div className="card rounded-xl bg-white w-[90%] mx-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
      <div className="savings-card">
        <div className={`${color} rounded-br-md rounded-tl-xl p-1 h-fit`}>
          <p className="text-[#0A4C66] text-center text-xs font-bold">
            {label}
          </p>
        </div>
        <div className="p-3">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[#0A4C66] font-bold -mb-1.5 opacity-80 text-center">
                {name}
              </p>
              <h2 className="text-[#0A4C66] text-2xl sm:text-3xl lg:text-4xl font-bold">
                {amount}
              </h2>
            </div>
            <AiOutlineEyeInvisible
              size={30}
              className="text-[#0A4C66] cursor-pointer mb-0.5"
            />
            <div />
          </div>
        </div>
      </div>
      <div className="space-y-1 p-3 -mt-3">
        <div className="grid grid-cols-2 border-b border-[#ccc] mb-3 pb-1.5 px-2 sm:px-5">
          <div className="text-gray-500">
            <p className="text-[10px] sm:text-sm">
              Frequency: <span className="font-semibold">Monthly</span>
            </p>
          </div>
          <div className="text-gray-500">
            <p className="text-[10px] sm:text-sm">
              AutoSave amount: <span className="font-semibold">UGX 1,000</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around text-[#0A4C66] font-semibold">
          <div className="flex flex-col items-center">
            <IoWalletOutline size={22} />
            <p>Deposit</p>
          </div>
          <div className="h-6 w-px bg-yellow-400" />
          <div className="flex flex-col items-center">
            <BsSend size={22} />
            <p>Share Medical</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCard;
