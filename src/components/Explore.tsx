import { use } from "react";
import type { IStacks } from "../Types/types";

interface IStackProps {
  fullStacks: Promise<IStacks[]>;
}

const Explore = ({ fullStacks }: IStackProps) => {
  const stacks = use(fullStacks);

  return (
    <div className="container mx-auto ">
      <div className="pb-10">
        <h1 className="text-3xl pb-2 font-bold">
          Explore the
          <span className="inline-block bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748B] text-sm ">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-6 items-start">
        <div className="grid grid-cols-1 col-span-4 gap-6 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3">
          {stacks.map((stack, indx) => (
            <div
              key={indx}
              className="group rounded-3xl border border-slate-200/60 bg-white/70 p-6 shadow-md backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-pink-400 hover:shadow-2xl"
            >
              {/* Logo + Rating */}
              <div className="mb-5 flex items-center justify-between">
                <div className="rounded-2xl bg-slate-100 p-3 transition duration-300 group-hover:scale-110 group-hover:bg-pink-50">
                  <img
                    src={stack.logo}
                    alt={stack.name}
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                  ⭐ {stack.rating}
                </span>
              </div>

              {/* Name */}
              <h2 className="mb-2 text-xl font-bold text-slate-900">
                {stack.name}
              </h2>

              {/* Description */}
              <p className="mb-5 h-25 text-sm leading-6 text-slate-500">
                {stack.description}
              </p>

              {/* Category & Difficulty */}
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
                  {stack.category}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    stack.difficulty === "Beginner"
                      ? "bg-green-100 text-green-700"
                      : stack.difficulty === "Intermediate"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {stack.difficulty}
                </span>
              </div>

              {/* Tag */}
              <div className="border-t border-slate-200 pt-4 ">
                <div className="flex justify-between items-center py-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Best For
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {stack.tag}
                    </p>
                  </div>
                  <button className="btn btn-neutral">Neutral</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-sm max-h-50 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">Your Stack</h1>

          <p className="mt-1 text-sm text-slate-400">
            No technologies selected yet.
          </p>

          <div className="mt-4 flex h-14 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-400">Your stack is empty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
