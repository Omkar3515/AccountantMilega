import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-[calc(100vh-4.5rem)] bg-linear-to-br from-slate-50 via-white to-blue-50 px-4 py-10 sm:min-h-[calc(100vh-5rem)] sm:py-16">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-[1.05fr_.95fr]">
        <section className="hidden flex-col justify-between bg-linear-to-br from-blue-700 to-blue-950 p-10 text-white lg:flex">
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span>Accountant</span>
              <span className="text-green-300">Milega</span>
              <span>.com</span>
            </Link>
            <h1 className="mt-20 text-4xl font-bold leading-tight">
              Welcome back to your career network.
            </h1>
            <p className="mt-5 max-w-md leading-7 text-blue-100">
              Connect with better accounting opportunities and manage your
              professional journey in one place.
            </p>
          </div>
          <p className="text-sm text-blue-200">
            Your next opportunity could be one login away.
          </p>
        </section>

        <section className="p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <LockKeyhole size={23} />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
              Sign in
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Enter your details to access your AccountantMilega account.
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Email address
                </span>
                <div className="relative mt-2">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Password
                </span>
                <div className="relative mt-2">
                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>
              <div className="flex items-center justify-between gap-4">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 accent-blue-600"
                  />{" "}
                  Remember me
                </label>
                <Link
                  to="/"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                className="h-12 w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Sign in
              </Button>
            </form>
            <p className="mt-7 text-center text-sm text-slate-600">
              New to AccountantMilega?{" "}
              <Link
                to="/"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
