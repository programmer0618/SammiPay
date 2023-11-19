import { apple, bill, google } from "../assets";
import { layout, styles } from "../util/util";

const Billing = () => {
  return (
    <section id="features" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImageReverse}`}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] w-[50%] h-[55%] rounded-full t-0 white__gradient -left-1/2" />
        <div className="absolute z-[0] w-[50%] h-[50%] rounded-full bottom-40 pink__gradient -left-1/2 " />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Hisob-kitob va fakturial <br className="sm:block hidden" /> osongina
          boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error
          hic quisquam ab dolorem in nulla eligendi dolores impedit earum.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={google}
            alt="google"
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={apple}
            alt="apple"
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
