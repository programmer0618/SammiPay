import { arrow } from "../assets";

const HomeNav = () => {
  return (
    <div className="fixed bottom-[30px] z-[99] right-[30px] w-[40px] rounded-full h-[40px] bg-slate-200">
      <a href="#">
        <img
          src={arrow}
          alt="arrow"
          className="w-[40px] p-[3px] h-[40px] rounded-full z-[100]"
        />
      </a>
    </div>
  );
};

export default HomeNav;
