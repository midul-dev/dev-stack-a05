import type { Dispatch, SetStateAction } from "react";
import type { IStacks } from "../Types/types";
import StackCard from "./StackCard";
import { FaXmark } from "react-icons/fa6";

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
  const handleRemove = (stack: IStacks) => {
    const remainStack = selectedStack.filter(
      (selected) => selected.name !== stack.name
    );

    setSelectedstack(remainStack);
  };

 return (
  <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-6">

    {/* Your Stack */}
    <div className="order-1 w-full lg:order-2 lg:col-span-2">
      {selectedStack.length === 0 ? (
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-lg font-bold text-slate-900">
            Your Stack
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            "No technologies selected yet."
          </p>

          <div className="mt-4 flex h-14 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-400">
              Your stack is empty.
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <h1 className="text-lg font-bold text-slate-900">
            Your Stack
          </h1>

          <p className="text-sm text-[#94A3B8]">
            {selectedStack.length} Technologies selected
          </p>

          <div className="mt-4 space-y-2">
            {selectedStack.map((stack: IStacks) => (
              <div
                key={stack.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-[#94A3B8] px-3 py-2 sm:px-5"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <img
                    src={stack.logo}
                    alt={stack.name}
                    className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
                  />

                  <div className="min-w-0">
                    <h1 className="truncate text-sm font-medium text-slate-700">
                      {stack.name}
                    </h1>

                    <p className="truncate text-sm text-slate-500">
                      {stack.category}
                    </p>
                  </div>
                </div>

                <span
                  onClick={() => handleRemove(stack)}
                  className="shrink-0 cursor-pointer"
                >
                  <FaXmark />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Available Stacks */}
    <div className="order-2 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:order-1 lg:col-span-4 lg:grid-cols-3">
      {stacks.map((stack: IStacks, indx) => (
        <StackCard
          key={stack.id}
          stack={stack}
          indx={indx}
          selectedStack={selectedStack}
          setSelectedstack={setSelectedstack}
        />
      ))}
    </div>

  </div>
);
};

export default AvailableStacks;