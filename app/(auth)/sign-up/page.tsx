
import { SignUpForm } from "../components/forms/SignUpForm";

const Page = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      <div className="relative hidden lg:flex flex-col justify-between bg-cyan-700 text-white p-12">
        <img
          src="/assets/sea.jpg"
          alt="Sea Photo by Shifaaz Shamoon on Unsplash"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-800/70 to-cyan-900/80" />

        <div className="relative z-10 mt-24">
          <h2 className="text-6xl font-bold tracking-tight">MCF 1</h2>
          <p className="mt-4 text-3xl text-cyan-100 max-w-md">
            Software solutions crafted to scale your business with confidence.
          </p>
        </div>

        <p className="relative z-10 text-sm text-cyan-200">
          © {new Date().getFullYear()} MCF 1. All rights reserved.
        </p>
      </div>

      <div className="flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md bg-white shadow-xl p-8">
          
          <h2 className="text-2xl font-semibold text-gray-900">
            Register Now!
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please enter your details to sign in.
          </p>

          <div className="mt-6">
            <SignUpForm />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Page;
