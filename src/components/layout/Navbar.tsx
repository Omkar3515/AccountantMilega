import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { NAV_LINKS } from "../../constants/navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
      <Container>
        <div className="flex h-18 items-center justify-between sm:h-20">
          <Link to="/" aria-label="AccountantMilega home">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl"><span className="text-blue-600">Accountant</span><span className="text-green-600">Milega</span><span>.com</span></h1>
          </Link>
          <ul className="hidden items-center gap-7 xl:flex">
            {NAV_LINKS.map((link) => <li key={link.title}><Link to={link.path} className="font-medium text-gray-700 transition-colors hover:text-blue-600">{link.title}</Link></li>)}
          </ul>
          <div className="hidden items-center gap-3 xl:flex">
            <Button type="button" className="border border-blue-200 text-blue-600 hover:bg-blue-50">Login</Button>
            <Button type="button" className="bg-blue-600 text-white hover:bg-blue-700">Register</Button>
          </div>
          <button type="button" onClick={() => setIsOpen((prev) => !prev)} aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} className="cursor-pointer rounded-lg p-2 text-slate-800 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 xl:hidden">
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
        {isOpen && (
          <div className="border-t border-gray-200 py-5 xl:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => <Link key={link.title} to={link.path} className="font-medium text-gray-700 transition-colors hover:text-blue-600" onClick={() => setIsOpen(false)}>{link.title}</Link>)}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button type="button" className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50">Login</Button>
                <Button type="button" className="w-full bg-blue-600 text-white hover:bg-blue-700">Register</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
