import { ArrowRight, Smartphone } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const CTASection = () => (
  <section className="bg-white py-14 sm:py-20">
    <Container>
      <Reveal className="overflow-hidden rounded-3xl border border-gray-100 bg-linear-to-r from-slate-50 to-blue-50 p-5 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:h-24 sm:w-24">
              <Smartphone size={42} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                Ready to Take the Next Step?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                Join thousands of accountants and employers already using
                AccountantMilega.com.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button className="h-14 w-full bg-green-600 text-white hover:bg-green-700 sm:w-auto sm:min-w-55">
              Register as Candidate{" "}
              <ArrowRight size={20} className="shrink-0" />
            </Button>
            <Button className="h-14 w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto sm:min-w-55">
              Register as Employer <ArrowRight size={20} className="shrink-0" />
            </Button>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
);

export default CTASection;
