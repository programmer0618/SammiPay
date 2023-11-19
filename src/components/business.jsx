import { features } from "../util/constants";
import { layout, styles } from "../util/util";
import { Button, FeatureCard } from "./index";

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznes rivojlantiring <br className="sm:block hidden" /> pulni hal
          qilamiz.
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse,
          nihil pariatur architecto tenetur beatae facilis ipsam numquam sint
          corporis.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
