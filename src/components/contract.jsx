import { card } from "../assets";
import { layout, styles } from "../util/util";
import { Button } from "./index";

const Contract = () => {
  return (
    <section className={layout.section} id="product">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Bir necha oson qadamda <br className="sm:block hidden" /> kontrakt
          tuzish
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          aliquam voluptate dolore obcaecati nihil aperiam natus quos facere
          consequatur ea?
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={layout.sectionImage}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Contract;
