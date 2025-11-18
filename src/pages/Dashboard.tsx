import React from "react";
import { IoClose } from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";
import SavingsCard from "../components/SavingsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// @ts-expect-error this is an irrelevant error
import "swiper/css";
// @ts-expect-error this is an irrelevant error
import "swiper/css/pagination";
import { items, tabs } from "../dummy/constants.dummy";
import Tab from "../components/Tab";
import TabActionCard from "../components/TabActionCard";
import { RiFileList3Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import NoData from "../components/NoData";
import ShouldRender from "../components/ShouldRender";

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0]);

  const handleTabChange = React.useCallback((newTab: string) => {
    setActiveTab(newTab);
  }, []);

  return (
    <div>
      <div className="curved-bottom w-full bg-linear-to-b from-[#0A4C66] to-[#0A4C66]/90 text-white px-4 pb-16 pt-6 relative">
        <div className="flex items-center justify-between">
          <GrFormPrevious
            size={30}
            className="text-yellow-400 cursor-pointer"
          />
          <h1 className="text-xl font-bold tracking-wide">clinicPesa</h1>
          <IoClose size={28} className="text-yellow-400 cursor-pointer" />
        </div>
        <p className="text-center mt-4 text-lg font-medium">
          Good Morning, <span className="font-semibold">Robert</span>
        </p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        speed={800}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="custom-swiper -mt-16"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="py-5">
            <SavingsCard
              amount={item.amount}
              label={item.label}
              color={item.color}
              name={item.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="max-w-[500px] mx-auto mt-4">
        <div className="scroll-bar overflow-x-auto px-6">
          <ul className="flex gap-2 min-w-[400px] tabs">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                label={tab}
                handleClick={() => handleTabChange(tab)}
                isActive={activeTab === tab}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-100/90">
        <ShouldRender isVisible={activeTab === tabs[0]}>
          <div className="max-w-[500px] mx-auto mt-2 grid grid-cols-2 gap-4  p-6">
            <TabActionCard
              icon={<RiFileList3Line size={32} className="text-[#0A4C66]" />}
              label="Pay Medical Bill"
            />
            <TabActionCard
              icon={<GiReceiveMoney size={32} className="text-[#0A4C66]" />}
              label="Get Loan"
            />
            <TabActionCard
              icon={<BsPeople size={32} className="text-[#0A4C66]" />}
              label="Join MaMas"
            />
            <TabActionCard
              icon={
                <IoCheckmarkCircleOutline
                  size={32}
                  className="text-[#0A4C66]"
                />
              }
              label="My Approvals"
            />
          </div>
        </ShouldRender>
        <ShouldRender isVisible={activeTab === tabs[1]}>
          <NoData tabTitle={activeTab} />
        </ShouldRender>
        <ShouldRender isVisible={activeTab === tabs[2]}>
          <NoData tabTitle={activeTab} />
        </ShouldRender>
        <div className="pt-12 pb-10 w-full flex justify-center">
          <p className="text-sm text-gray-600 font-semibold text-center">
            clinicPesa{" "}
            <a href="#clinicPesaT&C" className="text-[#0A4C66]">
              T&Cs
            </a>{" "}
            apply
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
