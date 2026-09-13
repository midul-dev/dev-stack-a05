import type { Dispatch, SetStateAction } from "react";
import type { IStacks } from "../Types/types";
import StackCard from "./StackCard";

interface IAvailableStacksProps {
  stacks: IStacks[];
  selectedStack: IStacks[];
  setSelectedstack: Dispatch<SetStateAction<IStacks[]>>;
}

const AvailableStacks = ({ stacks, selectedStack, setSelectedstack }: IAvailableStacksProps) => {
  return (
    <div className="grid grid-cols-5 gap-6 items-start">
      <div className="grid grid-cols-1 col-span-4 gap-6 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3">
        {stacks.map((stack: IStacks, indx: number) => (
          <StackCard stack={stack} indx={indx} selectedStack={selectedStack} setSelectedstack={setSelectedstack} />
        ))}
      </div>
{selectedStack.length === 0 ? (
        <div className="max-w-sm max-h-50 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">Your Stack</h1>
          <p className="mt-1 text-sm text-slate-400">"No technologies selected yet."</p>

          <div className="mt-4 flex h-14 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-400">Your stack is empty.</p>
          </div>
        </div>
      ) : (
        <div className="max-w-sm max-h-50 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">Your Stack</h1>
          <div className="mt-4 space-y-2">
            {selectedStack.map((stack: IStacks) => (
              <h1 key={stack.name} className="text-sm font-medium text-slate-700">
                {stack.name}
              </h1>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableStacks;
