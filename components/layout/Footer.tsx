import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo Top Center */}
        <div className="flex justify-center mb-10">
        <div className="relative w-[200px] h-[70px] sm:w-[240px] sm:h-[80px] md:w-[280px] md:h-[90px] lg:w-[320px] lg:h-[100px]">
  <Image
    src="/pictures/HomePage/Ricilix Logo.png"
    alt="Ricilix Logo"
    fill
    className="object-contain"
  />
</div>

        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-10 text-center md:text-left">

          {/* Company Intro */}
          <div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Transforming businesses through{" "}
              <span className="font-semibold text-white">
                intelligent automation
              </span>{" "}
              and{" "}
              <span className="font-semibold text-white">
                AI-driven solutions
              </span>.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-4">
              Solutions
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  <span className="font-medium">Business Automation</span>
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition">
                  CRM Optimization
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition">
                  AI Integration
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition">
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  <span className="font-medium">About Us</span>
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Case Studies
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-4">
              Connect
            </h4>

            <div className="flex justify-center md:justify-start gap-5">

              {/* LinkedIn */}
              <a href="#" className="text-purple-200 hover:text-purple-500 transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2C19 8 21 10.2 21 14v10h-4v-8.9c0-2.1-.75-3.5-2.6-3.5-1.4 0-2.2.95-2.6 1.85-.15.35-.2.85-.2 1.35V24H8V8z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="text-purple-200 hover:text-purple-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04A4.29 4.29 0 0015.5 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.98C7.69 9.09 4.07 7.13 1.64 4.16a4.29 4.29 0 00-.58 2.16c0 1.49.76 2.8 1.91 3.57a4.27 4.27 0 01-1.94-.54v.05c0 2.08 1.48 3.82 3.44 4.22-.36.1-.75.15-1.14.15-.28 0-.55-.03-.82-.08.55 1.72 2.16 2.97 4.07 3a8.6 8.6 0 01-5.33 1.84c-.35 0-.69-.02-1.03-.06A12.14 12.14 0 006.56 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.3 8.3 0 0024 5.1a8.52 8.52 0 01-2.54.7z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="text-purple-200 hover:text-purple-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.63 9.88v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.8 3.67-3.8 1.06 0 2.17.19 2.17.19v2.39H15c-1.21 0-1.59.75-1.59 1.52V12h2.7l-.43 2.89h-2.27v6.99A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-purple-200 hover:text-purple-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.88a1.13 1.13 0 11-2.26 0 1.13 1.13 0 012.26 0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">

          <p className="text-sm text-neutral-400">
            © 2026 <span className="font-semibold text-white">Ricilix</span>. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="text-sm hover:text-white transition">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
