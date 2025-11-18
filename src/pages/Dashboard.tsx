import React from "react";
import { IoClose } from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";
import SavingsCard from "../components/SavingsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// @ts-expect-error ignore missing types
import "swiper/css";
// @ts-expect-error ignore missing types
import "swiper/css/pagination";
// @ts-expect-error ignore missing types
import "swiper/css/effect-fade";
import { items, tabs } from "../dummy/constants.dummy";
import Tab from "../components/Tab";

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
        modules={[EffectFade, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        speed={800}
        pagination={{
          clickable: true,
        }}
        fadeEffect={{ crossFade: true }}
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
      <div className="max-w-[500px] mx-auto overflow-x-auto mt-4 px-4 scroll-bar">
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
  );
};

export default Dashboard;
