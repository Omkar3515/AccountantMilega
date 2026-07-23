import { 
  Users, 
  Building2, 
  Flag, 
  Target, 
  Eye, 
  ShieldCheck, 
  MousePointerClick, 
  Award, 
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* Breadcrumb - assuming it might go in a container, but adding here as per image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500">
        <Link to="/" className="text-blue-600 hover:underline inline-flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          Home
        </Link>
        <span className="mx-2">›</span>
        <span>About Us</span>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-[#1a365d] mb-4">About Us</h1>
            <h2 className="text-xl font-semibold text-emerald-600 mb-6">
              Connecting Accountants. Empowering Businesses.
            </h2>
            <p className="text-slate-700 text-lg mb-4">
              AccountantMilega.com is a dedicated platform created to connect Accountants, Finance Professionals, Chartered Accountant (CA) Firms, and Businesses across India.
            </p>
            <p className="text-slate-700 text-lg mb-8">
              Our platform helps job seekers find accountant jobs and helps employers hire the right accounting professionals in a simple, fast, and affordable way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Stat 1 */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1">
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full flex-shrink-0">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a365d]">10,000+</h3>
                  <p className="text-sm font-semibold text-[#1a365d]">Active Candidates</p>
                  <p className="text-xs text-slate-500 mt-1">Growing community of accounting professionals</p>
                </div>
              </div>
              
              {/* Stat 2 */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full flex-shrink-0">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a365d]">2,000+</h3>
                  <p className="text-sm font-semibold text-[#1a365d]">Registered Employers</p>
                  <p className="text-xs text-slate-500 mt-1">CA Firms & Businesses trusting our platform</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             {/* Decorative dots pattern could be added here via CSS or SVG if needed */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#e5e7eb_3px,transparent_3px)] [background-size:16px_16px] opacity-70 -z-10 translate-x-8 -translate-y-8"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500 rounded-full opacity-90 -z-10 -translate-x-12 translate-y-12"></div>
             <img 
               src="/images/team_laptop.png" 
               alt="Team working together on a laptop" 
               className="w-full h-auto rounded-3xl shadow-lg relative z-10 object-cover"
             />
          </div>
        </div>
      </section>

      {/* 3 Pillars: Why We Started, Our Mission, Our Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 text-emerald-600 p-2 rounded-full">
                <Flag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-emerald-600">Why We Started</h3>
            </div>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Finding the right accountant is not always easy. Many businesses spend a lot of time searching for suitable candidates, while many talented accountants struggle to find genuine job opportunities.
            </p>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              We started AccountantMilega.com with a simple goal—to create a dedicated platform where accountants and employers can connect directly.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-auto">
              Our focus is to make accountant hiring easier, faster, and more reliable for everyone.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-600">Our Mission</h3>
            </div>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Our mission is to help every accountant find the right career opportunity and help every business hire the right accounting professional.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-auto">
              We are committed to making the hiring process simple, transparent, and accessible for everyone.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 text-emerald-600 p-2 rounded-full">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-emerald-600">Our Vision</h3>
            </div>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Our vision is to become India's most trusted platform for Accountant and Finance hiring.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mt-auto">
              We want to build a strong community where job seekers, businesses, and CA firms can connect with confidence and grow together.
            </p>
          </div>

        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-[#1a365d] text-center mb-10">Our Values</h2>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-emerald-600 mb-3">Trust</h3>
              <p className="text-slate-600 text-sm">
                We believe in building a platform with genuine candidates and genuine employers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <MousePointerClick className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">Simplicity</h3>
              <p className="text-slate-600 text-sm">
                We keep everything simple—from registration to job applications and hiring.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-purple-600 mb-3">Quality</h3>
              <p className="text-slate-600 text-sm">
                We focus on providing better opportunities for candidates and quality hiring for employers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-full mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-orange-600 mb-3">Growth</h3>
              <p className="text-slate-600 text-sm">
                We believe that when businesses hire the right people and professionals find the right opportunities, everyone grows together.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MSquare Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-8 lg:p-12">
              <h4 className="text-emerald-600 font-bold mb-1">A Product of</h4>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a365d] mb-6">MSquare Software Systems Pvt. Ltd.</h2>
              
              <p className="text-slate-700 mb-4 text-[15px]">
                AccountantMilega.com is proudly developed and managed by MSquare Software Systems Pvt. Ltd.
              </p>
              
              <p className="text-slate-700 mb-4 text-[15px]">
                Established in 2019, MSquare Software Systems is an Indian software company providing technology solutions for businesses across different industries.
              </p>
              
              <p className="text-slate-700 mb-8 text-[15px]">
                With AccountantMilega.com, our goal is to make accountant hiring easier for candidates, CA firms, and businesses across India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  "Software Development",
                  "Web Applications",
                  "Mobile App Development",
                  "ERP Solutions",
                  "CRM Solutions",
                  "Artificial Intelligence (AI)",
                  "Business Automation",
                  "Cloud Solutions",
                  "Digital Transformation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-full">
              <img 
                src="/images/msquare_building.png" 
                alt="MSquare Software Systems Building" 
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
        <div className="bg-[#f0f7ff] rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
          
          {/* Handshake Image */}
          <div className="flex-shrink-0 relative z-10 w-48 h-48 md:w-56 md:h-56">
            <img 
              src="/images/handshake.png" 
              alt="Thank You Handshake" 
              className="w-full h-full object-contain mix-blend-multiply drop-shadow-md rounded-full bg-white p-2"
            />
          </div>

          <div className="flex-1 relative z-10">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Thank You</h2>
            <p className="text-slate-700 text-lg mb-4">
              Thank you for choosing AccountantMilega.com.
            </p>
            <p className="text-slate-700 text-lg mb-6">
              Whether you are looking for a job or hiring your next accountant, we are committed to providing a simple, reliable, and professional experience.
            </p>
            <p className="text-[#1a365d] font-bold text-lg">
              Let's build better careers and stronger businesses together.
            </p>
          </div>
          
          {/* Decorative wireframe people on the right side - optional, CSS based for now */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden lg:block">
            {/* Simple SVG illustration to mimic the target wireframe */}
            <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="150" r="40" stroke="#1a365d" strokeWidth="2"/>
              <circle cx="200" cy="150" r="20" stroke="#1a365d" strokeWidth="2"/>
              <path d="M100 150H160" stroke="#1a365d" strokeWidth="2"/>
              <path d="M160 150L150 140M160 150L150 160" stroke="#1a365d" strokeWidth="2"/>
            </svg>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;