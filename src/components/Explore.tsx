import { use, useState } from "react";
import type { IStacks } from "../Types/types";
import AvailableStacks from "./AvailableStacks";

interface IStackProps {
  fullStacks: Promise<IStacks[]>;
}

const Explore = ({ fullStacks }: IStackProps) => {
  const [selectedStack, setSelectedstack] = useState<IStacks[]>([]);
  const stacks = use(fullStacks);

  return (
    <div id="explore" className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      {/* Section Heading */}
      <div className="pb-8 text-center md:pb-10 md:text-left">
        <h1 className="pb-2 text-2xl font-bold sm:text-3xl">
          Explore the{" "}
          <span className="inline-block bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-sm text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <AvailableStacks
        stacks={stacks}
        selectedStack={selectedStack}
        setSelectedstack={setSelectedstack}
      />
    </div>
  );
};

export default Explore;