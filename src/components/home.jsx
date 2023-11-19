import { discount, robot } from "../assets";
import { styles } from "../util/util";
import { Button } from "./index";

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Animation image */}
      <div className={`flex-1 ${styles.flexStart} md:my-0 my-10`}>
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-10 rounded-sm"
        />
      </div>

      {/* Information */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}
      >
        {/* Discount information */}
        <div className="py-[6px] px-4 flex items-center rounded-[10px] mb-2 bg-discount-gradient ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Chegirma{" "}
            <span className="text-white">1 Oylik</span> Hisob Uchun
          </p>
        </div>

        {/* Title */}
        <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br />{" "}
            <span className="text-gradient">To'lov Usuli</span>
          </h1>
        </div>

        {/* Description */}
        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          repudiandae itaque fuga, nam minus sed doloremque sit animi quibusdam
          aspernatur.
        </p>
        {/* Getting Started */}
        <Button styles={"mt-5"} />

        {/* Gradient Background */}
        <div className="absolute z-[0] w-[40%] h-[35%] t-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient " />
        <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient " />
      </div>
    </section>
  );
};

export default Home;
