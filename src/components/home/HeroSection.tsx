import { BriefcaseBusiness, UserRound } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import HeroImage from "../../assets/accountant.jpg";

const HeroCard = ({
  type,
  price,
  description,
  icon: Icon,
  action,
  tone,
}: {
  type: string;
  price: string;
  description: string;
  icon: typeof UserRound;
  action: string;
  tone: "green" | "blue";
}) => {
  const palette =
    tone === "green"
      ? "border-green-100 bg-green-50 text-green-700"
      : "border-blue-100 bg-blue-50 text-blue-700";
  const solid =
    tone === "green"
      ? "bg-green-600 hover:bg-green-700"
      : "bg-blue-600 hover:bg-blue-700";
  return (
    <div
      className={`flex min-h-57.5 flex-col justify-between rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${palette}`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white sm:h-14 sm:w-14 ${solid.split(" ")[0]}`}
        >
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold sm:text-xl">{type}</h3>
          <p className="mt-2 text-sm text-slate-600">{description}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            ₹{price}
            <span className="ml-1 text-lg font-semibold sm:text-xl">Only</span>
          </h2>
        </div>
      </div>
      <Button className={`mt-6 h-14 w-full text-white ${solid}`}>
        {action} →
      </Button>
    </div>
  );
};

const HeroSection = () => (
  <section className="bg-linear-to-b from-slate-50 to-white py-12 sm:py-16 lg:py-20">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[53px]">
            Find Accountant Jobs.
            <br />
            Hire the Right Accountant.
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Upload your resume and apply for the best accounting jobs. CA firms,
            companies and businesses can search resumes and hire the right
            candidates.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <HeroCard
              type="For Job Seekers"
              description="Professional Registration"
              price="99"
              icon={UserRound}
              action="Upload Resume"
              tone="green"
            />
            <HeroCard
              type="For Employers"
              description="Annual Membership"
              price="2,799"
              icon={BriefcaseBusiness}
              action="Hire Accountant"
              tone="blue"
            />
          </div>
        </Reveal>
        <Reveal delay={0.12} className="flex items-center justify-center">
          <img
            src={HeroImage}
            alt="Accountant at work"
            className="aspect-4/3 w-full max-w-155 rounded-3xl object-cover shadow-xl"
          />
        </Reveal>
      </div>
    </Container>
  </section>
);

export default HeroSection;
