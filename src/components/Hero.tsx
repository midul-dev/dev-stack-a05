import Banner from "../assets/banner-stack.png";

const Hero = () => {
  const handleExplore = () => {
    const exploreSection = document.getElementById("explore");
    exploreSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-10 sm:py-14 md:grid-cols-2 md:gap-6 md:px-8 md:py-16 lg:gap-8 lg:px-6 lg:py-16">
      {/* Hero Content */}
      <div className="text-center md:text-left">
        <div className="mx-auto w-full max-w-2xl pb-8 md:mx-0 md:max-w-none md:pb-10 lg:w-125 lg:pb-14">
          <h1 className="pb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-[2.6rem] md:leading-tight lg:text-5xl lg:pb-8">
            Build Your Ideal{" "}
            <span className="inline-block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          <button
            onClick={handleExplore}
            className="btn bg-linear-to-r from-[#F97316] to-[#EC4899] text-white"
          >
            Explore Technologies
          </button>

          <button className="btn border-2 px-12 text-[#374151]">
            Learn More
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center md:justify-end lg:justify-center">
        <img
          src={Banner}
          alt=""
          className="w-full max-w-sm object-contain sm:max-w-md md:max-w-85 lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Hero;