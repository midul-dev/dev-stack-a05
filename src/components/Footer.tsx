import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="divider"></div>
      <div className="container mx-auto ">
        <div className="grid items-start gap-2 py-10 grid-cols-5">
          <div className="col-span-2">
            <img src={FooterLogo} alt="DevStack" className="pb-5 w-30" />
            <p className="w-[450px] pb-5 text-sm text-[#64748B]">
              Curated tools, technologies, and resources for developers building
              modern software.
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

          <div>
            <h2 className="pb-5 font-bold">COMPANY</h2>
            <ul className="grid gap-2 text-[#64748B]">
              <li>
                <a href="#"></a>About
              </li>
              <li>
                <a href="#"></a>Contact
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pb-5 font-bold">LEGAL</h2>
            <ul className="text-[#64748B] grid gap-2">
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
        <div className="text-[#94A3B8] flex justify-between container mx-auto py-5 text-sm items-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
