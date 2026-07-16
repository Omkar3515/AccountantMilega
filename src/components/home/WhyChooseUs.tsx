import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";
import { WHY_CHOOSE_US } from "../../constants/whyChooseUs";

const WhyChooseUs = () => (
  <section className="bg-white py-14 sm:py-20 lg:py-24">
    <Container>
      <Reveal>
        <SectionTitle title="Why Choose AccountantMilega?" />
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {WHY_CHOOSE_US.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal
              key={item.title}
              delay={index * 0.06}
            >
              <div
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${item.bgColor}`}
              >
                <Icon size={24} className={item.iconColor} />
              </div>
              <h2 className="mt-6 text-xl font-bold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  </section>
);

export default WhyChooseUs;
