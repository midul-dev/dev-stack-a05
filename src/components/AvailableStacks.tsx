import type { Dispatch, SetStateAction } from "react";
import type { IStacks } from "../Types/types";
import StackCard from "./StackCard";

interface IAvailableStacksProps {
  stacks: IStacks[];
  selectedStack: IStacks[];
  setSelectedstack: Dispatch<SetStateAction<IStacks[]>>;
}

const AvailableStacks = ({
  stacks,
  selectedStack,
  setSelectedstack,
}: IAvailableStacksProps) => {
  return (
    <div className="grid grid-cols-6 gap-6 items-start">
      <div className="grid grid-cols-1 col-span-4 gap-6 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3">
        {stacks.map((stack: IStacks) => (
          <StackCard
            stack={stack}
            selectedStack={selectedStack}
            setSelectedstack={setSelectedstack}
          />
        ))}
      </div>
      {selectedStack.length === 0 ? (
        <div className="max-w-sm col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-lg font-bold text-slate-900">Your Stack</h1>
          <p className="mt-1 text-sm text-slate-400">
            "No technologies selected yet."
          </p>

          <div className="mt-4 flex h-14 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-400">Your stack is empty.</p>
          </div>
        </div>
      ) : (
        <div className="max-w-[400px] col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-lg font-bold text-slate-900">Your Stack</h1>
          <p className="text-sm text-[#94A3B8]">
            {selectedStack.length} Technologies selected
          </p>
          <div className="mt-4 space-y-2">
            {selectedStack.map((stack: IStacks) => (
              <div
                key={stack.id}
                className="flex border border-[#94A3B8] rounded-xl py-2 px-6 gap-2"
              >
                <img src={stack.logo} alt={stack.name} className="w-[40px]" />
                <div>
                  <h1 className="text-sm font-medium text-slate-700">
                    {stack.name}
                  </h1>
                  <p>{stack.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableStacks;
