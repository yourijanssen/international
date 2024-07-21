import CountUp from "react-countup";
import {useTranslation} from "next-i18next";

const stats = [
  {
    num: 2,
    textKey: "yearsOfExperience",
  },
  {
    num: 6,
    textKey: "projectsCompleted",
  },
  {
    num: 5,
    textKey: "technologiesMastered",
  },
];

const Stats = () => {
  const { t } = useTranslation('common');

  return (
      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => {
              return (
                  <div
                      className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                      key={index}
                  >
                    <CountUp
                        end={item.num}
                        duration={5}
                        delay={0}
                        className="text-4xl xl:text-6xl font-extrabold text-text-light dark:text-text-dark"
                    />
                    <div
                        className={`${
                            t(item.textKey).length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                        } leading-snug text-text-light dark:text-text-dark`}
                    >
                      {t(item.textKey)}
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};
export default Stats;
