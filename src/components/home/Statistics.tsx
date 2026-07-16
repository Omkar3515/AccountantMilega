import Container from "../common/Container";
import { STATISTICS } from "../../constants/statistics";

const Statistics = () => (
  <section className="pb-14 sm:pb-20"><Container><div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md"><div className="grid md:grid-cols-2 lg:grid-cols-4">
    {STATISTICS.map((item, index) => { const Icon = item.icon; return <div key={item.title} className={`flex items-center gap-4 p-5 sm:p-6 lg:gap-5 lg:p-7 ${index !== STATISTICS.length - 1 ? "border-b border-gray-100 md:border-b-0 md:odd:border-r lg:border-r" : ""}`}><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 sm:h-14 sm:w-14"><Icon size={24} className="text-blue-600" /></div><div><h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">{item.count}</h2><p className="mt-1 text-sm text-gray-600 sm:text-base">{item.title}</p></div></div>; })}
  </div></div></Container></section>
);

export default Statistics;
