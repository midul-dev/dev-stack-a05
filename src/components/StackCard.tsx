import { useState } from "react";
import type { IStacks } from "../Types/types";

interface IStackProps {
  stack: IStacks
indx: number
selectedStack: IStacks[]
setSelectedstack: React.Dispatch<React.SetStateAction<IStacks[]>>
};
const StackCard = ({ stack, indx, selectedStack, setSelectedstack }: IStackProps) => {
    const [isSelected, setIsSelected]= useState(false)

const handleSelected = (selected: boolean) => {
setIsSelected(selected)
setSelectedstack([...selectedStack, stack])
}

    return (
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
                <button
                  onClick={() => handleSelected(true)}
                  className="btn btn-neutral" disabled={isSelected}
                >
                  {isSelected === true ? "Added" : "Add to Stack"}
                </button>
              </div>
            </div>
          </div>
    );
};

export default StackCard;