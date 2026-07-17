import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../common/Container";

const Footer = () => (
  <footer className="border-t border-gray-200 bg-white pb-8 pt-14 sm:pb-10 sm:pt-20">
    <Container>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold sm:text-3xl">
            <span className="text-blue-600">Accountant</span>
            <span className="text-green-600">Milega</span>
            <span>.com</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
            A trusted platform connecting accountants, CA firms and businesses
            for better career opportunities and hiring.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <SocialLink
              label="Facebook"
              icon="facebook"
              className="bg-blue-600 hover:bg-blue-700"
            />
            <SocialLink
              label="Instagram"
              icon="instagram"
              className="bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 hover:opacity-90"
            />
            <SocialLink
              label="WhatsApp"
              icon="whatsapp"
              className="bg-green-600 hover:bg-green-700"
            />
            <SocialLink
              label="LinkedIn"
              icon="linkedin"
              className="bg-sky-700 hover:bg-sky-800"
            />
          </div>
        </div>
        <FooterLinks
          title="For Candidates"
          links={[
            "Find Jobs",
            "Upload Resume",
            "Job Alerts",
            "Update Profile",
            "Pricing",
          ]}
        />
        <FooterLinks
          title="For Employers"
          links={[
            "Post a Job",
            "Search Resumes",
            "Employer Pricing",
            "How It Works",
            "Help Center",
          ]}
        />

        <FooterLinks
          title="Company"
          links={[
            "About Us",
            "Contact Us",
            "Terms & Conditions",
            "Privacy Policy",
            "Refund Policy",
          ]}
        />
        <div>
          <h3 className="font-bold text-slate-900">Contact Us</h3>
          <div className="mt-5 flex flex-col gap-4 text-sm text-gray-600">
            <Contact icon={Phone}>+91 9226605656</Contact>
            <Contact icon={Mail}>info@msquaresoftware.com</Contact>
            <Contact icon={MapPin}>
              B416, 4th Floor, Gera Imperium Gateway Nashik Phata Metro Station,
              Pune, India 411034
            </Contact>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-200 pt-8 text-center text-gray-600">
        <p className="text-sm leading-6">
          © 2026 AccountantMilega.com. Product of MSquare Software
          Systems Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
);

const FooterLinks = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="font-bold text-slate-900">{title}</h3>
    <div className="mt-5 flex flex-col gap-3 text-sm text-gray-600">
      {links.map((link) => (
        <Link
          className="transition-colors hover:text-blue-600"
          key={link}
          to="/"
        >
          {link}
        </Link>
      ))}
    </div>
  </div>
);
const SocialLink = ({
  label,
  icon,
  className,
}: {
  label: string;
  icon: "facebook" | "instagram" | "whatsapp" | "linkedin";
  className: string;
}) => (
  <a
    href="#"
    aria-label={label}
    className={`rounded-full p-2 text-white transition ${className}`}
  >
    <BrandIcon name={icon} />
  </a>
);
const BrandIcon = ({
  name,
}: {
  name: "facebook" | "instagram" | "whatsapp" | "linkedin";
}) => {
  const paths = {
    facebook: (
      <path d="M14 8h2V5c-.35-.05-1.55-.15-2.95-.15C10.14 4.85 8.15 6.62 8.15 9.85V12H5v3h3.15v8h3.86v-8h3.02l.48-3h-3.5V10.15c0-.87.24-1.46 1.49-1.46Z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="1" className="fill-current" />
      </>
    ),
    whatsapp: (
      <path d="M20.52 3.48A11.92 11.92 0 0 0 12.04 0C5.45 0 .1 5.35.1 11.94c0 2.1.55 4.15 1.6 5.95L0 24l6.28-1.65a11.9 11.9 0 0 0 5.75 1.46h.01c6.58 0 11.93-5.35 11.93-11.94 0-3.2-1.25-6.2-3.45-8.39ZM12.04 21.8a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.62-.24-.37a9.88 9.88 0 1 1 8.37 4.6Zm5.42-7.4c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-1.78-.89-2.95-1.58-4.12-3.58-.31-.53.31-.49.89-1.62.1-.2.05-.37-.03-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.28-.2-.58-.35Z" />
    ),
    linkedin: (
      <>
        <path d="M5.2 7.4A2.2 2.2 0 1 0 5.2 3a2.2 2.2 0 0 0 0 4.4ZM3.3 8.8h3.8V21H3.3zM9.5 8.8h3.64v1.67h.05c.5-.96 1.75-1.97 3.6-1.97 3.86 0 4.57 2.54 4.57 5.84V21h-3.8v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V21H9.5Z" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-[18px] w-[18px] stroke-current stroke-[1.8] ${name === "instagram" ? "fill-none" : "fill-current stroke-none"}`}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};
const Contact = ({
  icon: Icon,
  children,
}: {
  icon: typeof Phone;
  children: string;
}) => (
  <div className="flex gap-3">
    <Icon size={18} className="shrink-0 text-blue-600" />
    <span className="break-words">{children}</span>
  </div>
);
export default Footer;
