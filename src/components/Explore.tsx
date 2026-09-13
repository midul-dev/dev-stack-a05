import { use, useState } from "react";
import type { IStacks } from "../Types/types";
import AvailableStacks from "./AvailableStacks";

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
      <AvailableStacks stacks = {stacks} />
    </div>
  );
};

export default Explore;
