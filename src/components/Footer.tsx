import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="divider"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-8 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-2">
          {/* Logo & Description */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <img
              src={FooterLogo}
              alt="DevStack"
              className="w-30 pb-5"
            />

            <p className="w-full max-w-112.5 pb-5 text-sm text-[#64748B]">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <ul className="flex gap-4">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Linkdin</a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h2 className="pb-5 font-bold">PRODUCT</h2>

            <ul className="grid gap-2 text-[#64748B]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="pb-5 font-bold">COMPANY</h2>

            <ul className="grid gap-2 text-[#64748B]">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="pb-5 font-bold">LEGAL</h2>

            <ul className="grid gap-2 text-[#64748B]">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 py-5 text-sm text-[#94A3B8] sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <ul className="flex gap-4">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;