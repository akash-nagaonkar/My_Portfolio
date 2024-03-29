import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const FeedbackCard = ({ index, certificate_name, name, image, tags }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[50px]">
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-[40%] h-[80%]  object-cover ml-1"
      />
    </p>
    <br />
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">
        {certificate_name}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${tag}-${tag.name}`}
                className={`text-[18px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have achieved so far</p>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((certification, index) => (
          <FeedbackCard
            key={certification.certificate_name}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
